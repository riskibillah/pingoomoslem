function GFdynamicFeedControl(t,e,i){if(this.nodes={},this.collapseElements=[],this.feeds=[],this.results=[],"string"==typeof t)this.feeds.push({url:t});else if("object"==typeof t)for(var s=0;s<t.length;s++){var n=t[s],o={};if("string"==typeof n)o.url=t[s];else if("object"==typeof n&&(o=t[s])&&o.title){var r=o.title;o.title=r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}this.feeds.push(o)}"string"==typeof e&&(e=document.getElementById(e)),this.parseOptions_(i),this.setup_(e)}GFdynamicFeedControl.DEFAULT_NUM_RESULTS=4,GFdynamicFeedControl.DEFAULT_FEED_CYCLE_TIME=18e5,GFdynamicFeedControl.DEFAULT_DISPLAY_TIME=5e3,GFdynamicFeedControl.DEFAULT_FADEOUT_TIME=1e3,GFdynamicFeedControl.DEFAULT_TRANSISTION_STEP=40,GFdynamicFeedControl.DEFAULT_HOVER_TIME=100,GFdynamicFeedControl.prototype.parseOptions_=function(t){if(this.options={numResults:GFdynamicFeedControl.DEFAULT_NUM_RESULTS,feedCycleTime:GFdynamicFeedControl.DEFAULT_FEED_CYCLE_TIME,linkTarget:google.feeds.LINK_TARGET_BLANK,displayTime:GFdynamicFeedControl.DEFAULT_DISPLAY_TIME,transitionTime:GFdynamicFeedControl.DEFAULT_TRANSISTION_TIME,transitionStep:GFdynamicFeedControl.DEFAULT_TRANSISTION_STEP,fadeOutTime:GFdynamicFeedControl.DEFAULT_FADEOUT_TIME,scrollOnFadeOut:!0,pauseOnHover:!0,hoverTime:GFdynamicFeedControl.DEFAULT_HOVER_TIME,autoCleanup:!0,transitionCallback:null,feedTransitionCallback:null,feedLoadCallback:null,collapseable:!1,sortByDate:!1,horizontal:!1,stacked:!1,title:null},t)for(var e in this.options)void 0!==t[e]&&(this.options[e]=t[e]);this.options.stacked||(this.options.collapseable=!1),this.options.displayTime=Math.max(200,this.options.displayTime),this.options.fadeOutTime=Math.max(0,this.options.fadeOutTime);var i=this.options.fadeOutTime/this.options.transitionStep;this.fadeOutDelta=Math.min(1,1/i),this.started=!1},GFdynamicFeedControl.prototype.setup_=function(t){if(null!=t){this.nodes.container=t,window.ActiveXObject?this.ie=this[window.XMLHttpRequest?"ie7":"ie6"]=!0:!document.childNodes||document.all||navigator.taintEnabled?null!=document.getBoxObjectFor&&(this.gecko=!0):this.safari=!0,this.feedControl=new google.feeds.FeedControl,this.feedControl.setLinkTarget(this.options.linkTarget),this.expected=this.feeds.length,this.errors=0;for(var e=0;e<this.feeds.length;e++){var i=new google.feeds.Feed(this.feeds[e].url);i.setResultFormat(google.feeds.Feed.JSON_FORMAT),i.setNumEntries(this.options.numResults),i.load(this.bind_(this.feedLoaded_,e))}}},GFdynamicFeedControl.prototype.bind_=function(t){var e=this,i=[].slice.call(arguments,1);return function(){var s=i.concat([].slice.call(arguments));return t.apply(e,s)}},GFdynamicFeedControl.prototype.feedLoaded_=function(t,e){this.options.feedLoadCallback&&this.options.feedLoadCallback(e),e.error?++this.errors>=this.expected&&(this.nodes.container.innerHTML="Feed"+(this.expected>1?"s ":" ")+"could not be loaded."):(this.feeds[t].title&&(e.feed.title=this.feeds[t].title),this.results.push(e),this.started?!this.options.horizontal&&this.options.stacked&&this.addResult_(this.results.length-1):(this.createSubContainers_(),this.displayResult_(0)))},GFdynamicFeedControl.prototype.sortByDate_=function(t,e,i){for(var s=this.results[t].feed.entries[0].publishedDate,n=Date.parse(s),o=null,r=0;r<this.results.length;r++){var l=this.results[r].feed.entries[0].publishedDate;if(n>Date.parse(l)){o=r;break}}if(null==o)return this.nodes.root.appendChild(e),this.nodes.root.appendChild(i),void this.createListEntries_(t,i);var a=2+2*o,d=a+2,h=t+1,c=this.nodes.root.childNodes,p=c[a];this.nodes.root.insertBefore(e,p),this.nodes.root.insertBefore(i,p),this.results.splice(o,0,this.results[t]),this.results.splice(h,1);var y=c[d].nextSibling.childNodes;this.createListEntries_(o,i),0==o&&this.displayResult_(0),o+=1;for(r=d;r<c.length;r+=2){y=c[r].nextSibling.childNodes;for(var u=0;u<y.length;u++)y[u].onmouseover=this.bind_(this.listMouseOver_,o,u),y[u].onmouseout=this.bind_(this.listMouseOut_,o,u);o++}},GFdynamicFeedControl.prototype.addResult_=function(t){var e=this.results[t],i=this.createDiv_("gfg-subtitle");this.setTitle_(e.feed,i);var s=this.createDiv_("gfg-list");if(this.options.collapseable){var n=document.createElement("div");s.style.display="none",n.className="gfg-collapse-closed",i.appendChild(n),n.onclick=this.toggleCollapse(this,s,n),this.collapseElements.push({list:s,collapse:n})}var o=document.createElement("div");o.className="clearFloat",i.appendChild(o),this.options.sortByDate?this.sortByDate_(t,i,s):(this.nodes.root.appendChild(i),this.nodes.root.appendChild(s),this.createListEntries_(t,s))},GFdynamicFeedControl.prototype.displayResult_=function(t){this.resultIndex=t;var e=this.results[t];this.options.feedTransitionCallback&&this.options.feedTransitionCallback(e),this.options.title?this.setPlainTitle_(this.options.title):this.setTitle_(e.feed),this.clearNode_(this.nodes.entry),this.started&&!this.options.horizontal&&this.options.stacked?this.entries=e.feed.entries:this.createListEntries_(t,this.nodes.list),this.displayEntries_()},GFdynamicFeedControl.prototype.setPlainTitle_=function(t,e){(e||this.nodes.title).innerHTML=t},GFdynamicFeedControl.prototype.setTitle_=function(t,e){var i=e||this.nodes.title;this.clearNode_(i);var s=document.createElement("a");s.target=google.feeds.LINK_TARGET_BLANK,s.href=t.link,s.className="gfg-collapse-href",s.innerHTML=t.title,i.appendChild(s)},GFdynamicFeedControl.prototype.toggleCollapse=function(t,e,i){return function(){for(var s=t.collapseElements,n=0;n<s.length;n++){var o=s[n];o.list.style.display="none",o.collapse.className="gfg-collapse-closed"}e.style.display="block",i.className="gfg-collapse-open"}},GFdynamicFeedControl.prototype.createListEntries_=function(t,e){var i=this.results[t].feed.entries;this.clearNode_(e);for(var s=0;s<i.length;s++){this.feedControl.createHtml(i[s]);var n="gfg-listentry ";n+=s%2?"gfg-listentry-even":"gfg-listentry-odd";var o=this.createDiv_(n),r=this.createLink_(i[s].link,i[s].title,this.options.linkTarget);o.appendChild(r),this.options.pauseOnHover&&(o.onmouseover=this.bind_(this.listMouseOver_,t,s),o.onmouseout=this.bind_(this.listMouseOut_,t,s)),i[s].listEntry=o,e.appendChild(o)}e==this.nodes.list&&(this.entries=i)},GFdynamicFeedControl.prototype.displayEntries_=function(){this.entryIndex=0,this.displayCurrentEntry_(),this.setDisplayTimer_(),this.started=!0},GFdynamicFeedControl.prototype.displayNextEntry_=function(){if(this.options.autoCleanup&&this.isOrphaned_())this.cleanup_();else{if(++this.entryIndex>=this.entries.length){if(this.results.length>1)return++this.resultIndex>=this.results.length&&(this.resultIndex=0),void this.displayResult_(this.resultIndex);this.entryIndex=0}this.options.transitionCallback&&this.options.transitionCallback(this.entries[this.entryIndex]),this.displayCurrentEntry_(),this.setDisplayTimer_()}},GFdynamicFeedControl.prototype.displayCurrentEntry_=function(){if(this.clearNode_(this.nodes.entry),this.current=this.entries[this.entryIndex].html,this.current.style.top="0px",this.nodes.entry.appendChild(this.current),this.createOverlay_(),this.options.collapseable){for(var t=null,e=0;e<this.results.length;e++)this.results[e].feed.entries==this.entries&&(t=this.results[e].feed.title);var i=this.collapseElements;for(e=0;e<i.length;e++){var s=i[e],n=s.collapse.previousSibling.innerHTML,o=s.collapse;t==n&&(this.ie?o.click():o.onclick())}}if(this.currentList){var r="gfg-listentry ";r+=this.currentListIndex%2?"gfg-listentry-even":"gfg-listentry-odd",this.currentList.className=r}this.currentList=this.entries[this.entryIndex].listEntry,this.currentListIndex=this.entryIndex;r="gfg-listentry gfg-listentry-highlight ";r+=this.currentListIndex%2?"gfg-listentry-even":"gfg-listentry-odd",this.currentList.className=r},GFdynamicFeedControl.prototype.listMouseHover_=function(t,e){var i=this.results[t];i.feed.entries[e].listEntry.selectTimer=null,this.clearTransitionTimer_(),this.clearDisplayTimer_(),this.resultIndex=t,this.entries=i.feed.entries,this.entryIndex=e,this.displayCurrentEntry_()},GFdynamicFeedControl.prototype.listMouseOver_=function(t,e){var i=this.results[t].feed.entries[e].listEntry,s=this.bind_(this.listMouseHover_,t,e);i.selectTimer=setTimeout(s,this.options.hoverTime)},GFdynamicFeedControl.prototype.listMouseOut_=function(t,e){var i=this.results[t].feed.entries[e].listEntry;i.selectTimer?(clearTimeout(i.selectTimer),i.selectTimer=null):this.setDisplayTimer_()},GFdynamicFeedControl.prototype.entryMouseOver_=function(t){this.clearDisplayTimer_(),this.transitionTimer&&(this.clearTransitionTimer_(),this.displayCurrentEntry_())},GFdynamicFeedControl.prototype.entryMouseOut_=function(t){this.setDisplayTimer_()},GFdynamicFeedControl.prototype.createOverlay_=function(){if(null!=this.current){if(null==this.overlay){var t=this.createDiv_("gfg-entry");t.style.position="absolute",t.style.top="0px",t.style.left="0px",this.overlay=t}this.setOpacity_(this.overlay,0),this.nodes.entry.appendChild(this.overlay)}},GFdynamicFeedControl.prototype.setDisplayTimer_=function(){this.displayTimer&&this.clearDisplayTimer_();var t=this.bind_(this.setFadeOutTimer_);this.displayTimer=setTimeout(t,this.options.displayTime)},GFdynamicFeedControl.timeNow=function(){return(new Date).getTime()},GFdynamicFeedControl.prototype.fadeOutEntry_=function(){if(this.overlay){var t=this.fadeOutDelta,e=this.options.transitionStep,i=GFdynamicFeedControl.timeNow(),s=i-this.lastTick;this.lastTick=i,t*=s/e;var n=this.overlay.opacity+t;if(this.setOpacity_(this.overlay,n),this.options.scrollOnFadeOut&&n>.5){var o=2*(n-.5),r=Math.round(this.current.offsetHeight*o);this.current.style.top=r+"px"}if(n<1)return}this.clearTransitionTimer_(),this.displayNextEntry_()},GFdynamicFeedControl.prototype.setFadeOutTimer_=function(){this.clearTransitionTimer_(),this.lastTick=GFdynamicFeedControl.timeNow();var t=this.bind_(this.fadeOutEntry_);this.transitionTimer=setInterval(t,this.options.transitionStep)},GFdynamicFeedControl.prototype.clearTransitionTimer_=function(){this.transitionTimer&&(clearInterval(this.transitionTimer),this.transitionTimer=null)},GFdynamicFeedControl.prototype.clearDisplayTimer_=function(){this.displayTimer&&(clearTimeout(this.displayTimer),this.displayTimer=null)},GFdynamicFeedControl.prototype.createSubContainers_=function(){var t=this.nodes,e=this.nodes.container;if(this.clearNode_(e),this.options.horizontal?(e=this.createDiv_("gfg-horizontal-container"),t.root=this.createDiv_("gfg-horizontal-root"),this.nodes.container.appendChild(e)):t.root=this.createDiv_("gfg-root"),t.title=this.createDiv_("gfg-title"),t.entry=this.createDiv_("gfg-entry"),t.list=this.createDiv_("gfg-list"),t.root.appendChild(t.title),t.root.appendChild(t.entry),!this.options.horizontal&&this.options.stacked){var i=this.createDiv_("gfg-subtitle");if(t.root.appendChild(i),this.setTitle_(this.results[0].feed,i),this.options.collapseable){var s=document.createElement("div");s.className="gfg-collapse-open",i.appendChild(s),s.onclick=this.toggleCollapse(this,t.list,s),this.collapseElements.push({list:t.list,collapse:s}),t.list.style.display="block"}var n=document.createElement("div");n.className="clearFloat",i.appendChild(n)}t.root.appendChild(t.list),e.appendChild(t.root),this.options.pauseOnHover&&(t.entry.onmouseover=this.bind_(this.entryMouseOver_),t.entry.onmouseout=this.bind_(this.entryMouseOut_)),this.options.horizontal&&(t.branding=this.createDiv_("gfg-branding"),google.feeds.getBranding(t.branding,google.feeds.VERTICAL_BRANDING),e.appendChild(t.branding))},GFdynamicFeedControl.prototype.clearNode_=function(t){if(null!=t)for(var e;e=t.firstChild;)t.removeChild(e)},GFdynamicFeedControl.prototype.createDiv_=function(t,e){var i=document.createElement("div");return e&&(i.innerHTML=e),t&&(i.className=t),i},GFdynamicFeedControl.prototype.createLink_=function(t,e,i){var s=document.createElement("a");return s.href=t,s.innerHTML=e,i&&(s.target=i),s},GFdynamicFeedControl.prototype.clearResults_=function(){for(var t=0;t<this.results.length;t++){var e=this.results[t].feed.entries;for(t=0;t<e.length;t++){var i=e[t];i.html=null,i.listEntry.onmouseover=null,i.listEntry.onmouseout=null,i.listEntry.selectTimer&&(clearTimeout(i.listEntry.selectTimer),i.listEntry.selectTimer=null),i.listEntry=null}}},GFdynamicFeedControl.prototype.isOrphaned_=function(){var t=this.nodes.root,e=!1;return t&&t.parentNode?this.options.horizontal&&!t.parentNode.parentNode&&(e=!0):e=!0,e},GFdynamicFeedControl.prototype.cleanup_=function(){this.started=!1,this.clearDisplayTimer_(),this.clearTransitionTimer_(),this.clearResults_(),this.clearNode_(this.nodes.root),this.nodes.container=null},GFdynamicFeedControl.prototype.setOpacity_=function(t,e){if(null!=t){if(0==(e=Math.max(0,Math.min(1,e)))?"hidden"!=t.style.visibility&&(t.style.visibility="hidden"):"visible"!=t.style.visibility&&(t.style.visibility="visible"),this.ie){var i=Math.round(100*e);t.style.filter="alpha(opacity="+i+")"}t.style.opacity=t.opacity=e}},GFgadget=GFdynamicFeedControl;