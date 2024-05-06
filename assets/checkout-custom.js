(function($) {
    $(document).on("page:load page:change", function() {
        $(".radio__input .input-radio").change(function() {
            $('.content-box__row').removeClass('checked');
            if($(this).prop('checked')) {
               $(this).parents('.content-box__row').addClass('checked');
            } 
        });
    
        $('.order-summary-toggle').click (function (){
            $('.anyflexbox .content').toggleClass('active');
        });
    
        $( ".radio__input .input-radio:checked").parents('.content-box__row').addClass('checked');
    
        // create field 
        var giftCardHtml = '<div class="fieldset field-gift"><div class="field"><div class="field__input-btn-wrapper"><div class="field__input-wrapper">';
        giftCardHtml += '<input placeholder="Enter code" class="field__input checkout_gift_card" id="checkout_gift_card" autocomplete="off" aria-required="true" size="30" type="text" name="checkout[gift_card]"></div>';
        giftCardHtml += '<button name="button" type="button" class="field__input-btn btn btn--disabled btn-gift" disabled="disabled">';
        giftCardHtml += ' <span class="btn__content visually-hidden-on-mobile">Apply</span>';
        giftCardHtml += '<span class="visually-hidden">Apply Gift Card</span>';
        giftCardHtml += '<svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"> <use xlink:href="#spinner-button"></use></svg></button>';
        giftCardHtml += '</div><p class="field__message field__message--error error-for-gift_code" id="error-for-gift_code">Enter a valid discount code or gift card</p></div>';
    
        $('.section--reductions.hidden-on-desktop .section__content').append(giftCardHtml);
    
        $('#checkout_remember_me').parents('.field').addClass('remember');
    
        if (Shopify.Checkout.step == 'shipping_method'){ 
            //create text input variable
            var input = 
                    '<div class="section section--delivery-notes">' +
                        '<div class="section__header">' +
                            '<h2 class="section__title">' +
                                'Delivery Instructions (optional)'+
                            '</h2>' +
                        '</div>' +
        
                        '<div class="section__content">' +
                            '<div class="fieldset">' +
                                '<div class="field__input-wrapper"><label class="field__label field__label--visible" for="delivery_notes">Purchase Order Number</label>' +
                                    '<textarea placeholder="Enter delivery instructions"  autocorrect="off" class="field__input" aria-required="true" value="" name="checkout[attributes][deliveryInstructions ]" id="delivery_notes"></textarea>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                                                
            //append Purchase Order html content
            $(".section--shipping-method:first").after(input);
        }
    });
    
  })(Checkout.$);
