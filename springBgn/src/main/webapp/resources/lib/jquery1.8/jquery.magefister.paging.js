(function($) {

    $.fn.magefister4jPaging = function(options) {
        var opts = $.extend({},$.fn.magefister4jPaging.defaults,options);

        var original = this;

        var action = {

            init : function() {
                var totalPage = Math.ceil(opts.totalSize/opts.pageSize);
                var totalPageList = Math.ceil(totalPage/opts.pageListSize);
                var pageList = Math.ceil(opts.pageNo/opts.pageListSize);
                if (pageList < 1) pageList = 1;
                if (pageList > totalPageList) pageList = totalPageList;
                var startPageList = (pageList - 1) * opts.pageListSize + 1;
                var endPageList = startPageList + opts.pageListSize - 1;

                if (startPageList < 1) startPageList = 1;
                if (endPageList > totalPage) endPageList = totalPage;
                if (endPageList < 1) endPageList = 1;

                var innerHTML = action.getPageItemLink(1, '<img style="margin: 0px  !important;vertical-align: middle !important;" src="'+_SKIN_ROOT_+'/docs2/common/img/list_first.gif" alt="처음" />', (opts.pageNo > 1), '');
                innerHTML += action.getPageItemLink((startPageList - 1), '<img style="margin: 0px  !important;vertical-align: middle !important;" src="'+_SKIN_ROOT_+'/docs2/common/img/list_prev.gif" alt="이전" />', (startPageList > 1), '');
                for (var i = startPageList; i <= endPageList; i++) {

                    innerHTML += action.getNumberLink(i, null, (opts.pageNo != i), ((opts.pageNo == i)? 'strong': ''), endPageList);
                    if (i < endPageList) {
                        //innerHTML += ' | ';       // separate action
                    }
                }
                innerHTML += action.getPageItemLink((endPageList + 1),'<img style="margin: 0px  !important;vertical-align: middle !important;" src="'+_SKIN_ROOT_+'/docs2/common/img/list_next.gif" alt="다음" />',(endPageList < totalPage), '');
                innerHTML += action.getPageItemLink(totalPage, '<img style="margin: 0px  !important;vertical-align: middle !important;" src="'+_SKIN_ROOT_+'/docs2/common/img/list_last.gif" alt="마지막" />', (opts.pageNo < totalPage), 'arrow next');
                $(original).html(innerHTML);
            },

            getNumberLink : function(pageNo, text, useLink, className, endPageList) {

                if (useLink) {
                    return '<a href="javascript:'+opts.pageClickFunctionName+'(' + pageNo + ')">' + ((text != null && text != '')? text: pageNo) + '</a>\n';
                }
                else {
                    return '<span class="current">' +
                            ((text != null && text != '')? text: pageNo) +
                            '<input type="hidden" id="pagingNowPage" value="'+ String(pageNo) +'"><input type="hidden" id="pagingBlockCount" value="'+ String(endPageList) +'"></span>\n';
                }
            },

            getPageItemLink : function(pageNo, text, useLink, className) {
                if(useLink) {
                    return '<a' + ((className != null && className != '')? ' class="' + className + '"': '') +
                            ' href="javascript:'+opts.pageClickFunctionName+'(' + pageNo + ')">' +
                            '<span>' +
                            ((text != null && text != '')? text: pageNo) +
                            '</span>' +
                            '</a>\n';
                }
                else {
                    if(opts.showUnlinkedSymbols) {
                        return '<span>' +
                                    ((text != null && text != '')? text: pageNo) +
                                '</span>\n';
                    } else {
                        return '\n';
                    }
                }
            }

        };
        action.init();
    };

    $.fn.magefister4jPaging.defaults = {
        totalSize : 0,      // total size
        pageNo : 1,         // current page No
        pageSize : 10,     // list per page count
        pageListSize : 5,  // page bar count 1 2 3 4 5
        pageClickFunctionName : 'page_click',
        showUnlinkedSymbols : true
    };

})(jQuery);