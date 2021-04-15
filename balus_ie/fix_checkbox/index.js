    jQuery(function () {
        jQuery('#jquery-smaple-form input[name=jquery-smaple-checkbox]').change(
            function () {
                jQuery('#jquery-smaple-form input').closest('label').css({
                    backgroundColor: 'white',
                    borderColor: 'rgb(80, 171, 140)',
                    color: '#303030',
                });
                jQuery('#jquery-smaple-form :checked').closest('label').css({
                    backgroundColor: 'rgb(80, 171, 140)',
                    borderColor: 'green',
                    color: 'white',
                });
            }
        ).change();
    })
