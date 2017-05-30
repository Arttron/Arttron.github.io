(function(){
    $(document).ready(function(){
//        $('.tabBox__item').hide();
//        $('.tabBox__item-select').show();
//        $('.tabBox__link').click(function(){
//            console.log(arguments);
//
//            return false;
//        });
//        //console.log($('.tabBox__link'));
//
//
//       // $('.tabBox__head').;

        $('ul#tabBox__head').each(function(){
            // For each set of tabs, we want to keep track of
            // which tab is active and its associated content
            var $active, $content, $links = $(this).find('a');
            console.log($active);
            // If the location.hash matches one of the links, use that as the active tab.
            // If no match is found, use the first link as the initial active tab.
            $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
            $active.addClass('active');

            $content = $($active[0].hash);

            // Hide the remaining content
            $links.not($active).each(function () {
                $(this.hash).hide();
            });
            $($active).focus();
            // Bind the click event handler
//            function hendler(event){
//                // console.log(event.code);
////                if(event.code=='Tab'){
//                    alert(event);
////                }
//            }
//            window.addEventListener('keypress', hendler);
//            $('a').on("blur", function(){
//               // $(this).focus();
//                //e.preventDefault();
//            });
            $('a').on("focus", function(e){
                // Make the old tab inactive.
                $active.removeClass('active');
                $content.hide();
                // Update the variables with the new link and content
                $active = $(this);
                $content = $(this.hash);

                // Make the tab active.
                $active.addClass('active');
                $content.show();

                // Prevent the anchor's default click action
                //e.preventDefault();
                return false;
            });
        });

    });
})();
