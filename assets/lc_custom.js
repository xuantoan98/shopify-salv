// JS
var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

$(input_selector).blur(function () {
    const val = $(this).val();
    (val ? $(this).addClass('active') : $(this).removeClass('active'));
});


function addScrollMiniCart() {
    $('.minicart-items').scroll(function (e) {
        let caculator = $(this).scrollTop();
        if (caculator == 0) {
            $('.cart-heading h4').removeClass('add-border');
        } else {
            $('.cart-heading h4').addClass('add-border');
        }
    });
}

function updateTextFields() {
    $(input_selector).each(function (index, element) {
        var $this = $(this);
        var inputId = $this.attr('id');
        if ($(element).val().length > 0 || $(element).is(':focus') || element.autofocus) {
            $('label[for="' + inputId + '"]').addClass('active');
            $('#' + inputId).addClass('valid');
        } else if ($(element)[0].validity) {
            $('label[for="' + inputId + '"]').toggleClass('active', $(element)[0].validity.badInput === true);
        } else {
            $('label[for="' + inputId + '"]').removeClass('active');
        }
        if ($(element).is(':focus')) {
            $('label[for="' + inputId + '"]').addClass('focusing');
        } else {
            $('label[for="' + inputId + '"]').removeClass('focusing');
        }
    });
};

updateTextFields();
$(function () {
    $('.form_newsletter #email').blur(function () {
        if($(this).hasClass('error')){
            $('.form-message').show();
        }else {
            $('.form-message').hide();
        }
    });
    
    $('.newsletter__button_form').click(function () {
        if($('.form_newsletter #email').val() == '' || $('.form_newsletter #email').hasClass('error')){
            $('.form-message').show();
        }else {
            $('.form-message').hide();
        }
    });

    $('.close_form').click(function (e) {
        e.preventDefault();
        $('.newsletter-section').hide();
        $('body').removeClass('bg_form_show');
    });

    if($('.newsletter-section').length) {
        $('body').addClass('bg_form_show');
    }
    /** Check select focus, blur, change.*/
    $('select').each(function () {
        var ele = $(this);
        var selectVal = ele.find('option:selected').text();
        if (selectVal == 0) {
            $(this).parents('.field').find('label').removeClass('filled');
        } else {
            $(this).parents('.field').find('label').addClass('filled');
        }
    });

    $('body').on('blur', 'select', function () {
        $(this).removeClass('focused');
        $(this).parents('.field').removeClass('active');
    });

    $('body').on('focus', 'select', function () {
        $(this).addClass('focused');
        $(this).parents('.field').addClass('active');
    });

    $('body').on('change', 'select', function () {
        var val = $(this).find('option:selected').text();
        if (val == 0) {
            $(this).parents('.field').find('label').removeClass('filled');
            $(this).parents('.field').removeClass('focused');
            $(this).trigger('blur');
        } else {
            $(this).parents('.field').addClass('focused');
            $(this).parents('.field').find('label').addClass('filled');
            $(this).trigger('blur');
        }
    });

    // END

    $('.close_notification').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.form-message').hide();
    });

    // Check image collection exist;
    if ($('.collection-hero__image-container').length) {
        $('body').addClass('image_active');
    } else {
        $('body').addClass('not_image');
    }
    // End

    $("#customer_login,#ContactFooter,#create_customer").validate({
        // use highlight and unhighlight
        highlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").addClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").removeClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }
    });

    $("#NewsletterForm").validate({
        // use highlight and unhighlight
        highlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").addClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").removeClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }

    });

    $("#recover_customer_password").validate({
        // use highlight and unhighlight
        highlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").addClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").removeClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }

    });
    $("#reset_account_password").validate({
        // use highlight and unhighlight
        highlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").addClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").removeClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }

    });

    $("#create_customer").validate({
        // use highlight and unhighlight
        highlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").addClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find("div[for=" + element.id + "]").removeClass("error");
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }

    });
    $("#Confirm-password").rules("add", {
        required: true,
        equalTo: "#RegisterForm-password",
    });
    $("#RegisterForm-password").rules("add", {
        required: true,
        minlength: 5,
        messages: {
            minlength: jQuery.validator.format("Password is too short (minimum is 5 characters)")
        }
    });
    $("#RegisterForm-email").rules("add", {
        required: true,
    });
    $("#RegisterForm-FirstName").rules("add", {
        required: true
    });
    $("#RegisterForm-LastName").rules("add", {
        required: true
    });
    $("#CustomerEmail").rules("add", {
        required: true
    });
    $("#CustomerPassword").rules("add", {
        required: true
    });
    $("#password").rules("add", {
        required: true,
        minlength: 5,
    });
    $("#password_confirmation").rules("add", {
        required: true,
        equalTo: "#password",
    });
    $("#RecoverEmail").rules("add", {
        required: true,
    });
});
jQuery(document).ready(function ($) {
    $(document).on('click', '.button-add-tocart', function (e) {
        e.preventDefault();
        var btn = $(this);
        var vId = btn.data('id');
        btn.addClass('loader');
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: 'quantity=1&id=' + vId,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function (lineitem) {
                btn.removeClass('loader');
                refreshMiniCart();
                $('body').addClass('open-minicart');
                // let callback = function () {};
                // if ($('.mini-cart-wrapper').hasClass('show')) {
                //     cartControl.closeCart();
                // } else {
                //     cartControl.openCart();
                // }
                // refreshMiniCart(lineitem, 1);
            },
            error: function (XMLHttpRequest, textStatus) {
                btn.removeClass('loader');

                if (textStatus === 'error') {
                    if (btn.next().hasClass('add-cart-error')) return;

                    let message = $('<div>').append(
                        $('<span>').text(XMLHttpRequest.responseJSON.description)
                    ).addClass('add-cart-error');
                    message.insertAfter(
                        btn
                    );

                    setTimeout(() => {
                        message.fadeOut(function () {
                            message.remove();
                        })
                    }, 2500)
                }
            }
        });
    });

    // Product page
    $('.popup-info').on('click', function (e) {
        e.preventDefault();
        $('.modal-info').toggleClass('is-visible');
        $('.popup-bg').toggleClass('is-visible');
        $('body').toggleClass("scroll");
    });

    var result = $(".product__info-container .product-form__input input:checked").val();
    $('.sticky-price').text(result);

    $('.product__info-container .product-form__input input').on('click', function (e) {
        var result = $(this).val();
        $('.sticky-price').text(result);
        $('.product__info-container .product-form__input input').attr('checked', false);
        $(this).attr('checked', true);
    });

    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $(".sticky-product").outerHeight();

    $(window).scroll(function (event) {
        var currentScroll = $(window).scrollTop();
        if (currentScroll < scroll) {
            $('.sticky-product').removeClass("active");
        } else if (scroll > 110) {
            $('.sticky-product').addClass("active");
        } else {
            $('.sticky-product').removeClass("active");
        }
        scroll = currentScroll;

        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $(".sticky-product").removeClass("nav-up").addClass("nav-down");
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $(".sticky-product").removeClass("nav-down").addClass("nav-up");
            }
        }
        lastScrollTop = st;
    }


    $(".option-product").click(function () {
        $(".option-product").removeClass("active");
        $(this).toggleClass("active");
        if ($(this).hasClass("bundle-product")) {
            $(".option-product.active + .bundle-product-wrapper").addClass("active");
            $(".product-forms.bundle-product").addClass("active");
            $(".product-forms.simple-product").removeClass("active");
            $("body").addClass("scroll");
        } else {
            $(".product-forms.simple-product").addClass("active");
            $(".product-forms.bundle-product").removeClass("active");
        }

    });

    $(".bundle-product-close").click(function () {
        $(".bundle-product-wrapper").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".bg-bundle-product").click(function () {
        $(".bundle-product-wrapper").removeClass("active");
        $("body").removeClass("scroll");
    });


    // Minicart Custom
    $('.header__icon.header__icon--cart').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('open-minicart');
        $('html').toggleClass('open-minicart');
    });

    $('.bg-minicart-close').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('open-minicart');
        $('html').toggleClass('open-minicart');
    });

    $(document).on('click', '.close-minicart', function () {
        $('body').removeClass('open-minicart');
        $('html').toggleClass('open-minicart');
    });

    // Remove item
    $(document).on('click', '.remove-item', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');

        if (id) {
            $('.mini-cart-content #mincart-loading').show();
            $.ajax({
                method: "POST",
                url: "/cart/update.js",
                data: "updates[" + id + "]=0",
                dataType: "json",
                success: function (response) {
                    if (response['item_count'] == 0) {
                        $('.close-minicart').trigger('click');
                    }

                    refreshMiniCart();
                },
                error: function (XMLHttpRequest, textStatus) {
                    $('.mini-cart-content #mincart-loading').hide();
                    // handleError(XMLHttpRequest);
                }
            });
        }
    });

    // Handle quantity on minicart
    $(document).on('click', '.mini-cart-wrapper .product-form-item .plus', function () {
        var $inputQty = $(this).closest('.product-form-item').find('.product-form__input--quantity').first();
        var qty = parseInt($inputQty.val());

        $(this).prop('disabled', true);
        $(this).addClass('disabled');

        $inputQty.val(qty).trigger('change');
    });

    $(document).on('click', '.mini-cart-wrapper .product-form-item .minus', function () {
        var $inputQty = $(this).closest('.product-form-item').find('.product-form__input--quantity').first();
        var qty = parseInt($inputQty.val());

        $(this).prop('disabled', true);
        $(this).addClass('disabled');

        $inputQty.val(qty).trigger('change');
    });

    $(document).on('change', '.product-form__input.product-form__input--quantity', function () {
        let that = $(this);
        let item_id = $(this).closest('.product-form-item').data('id');
        let qty = parseInt(that.val());

        if (qty < 0) {
            qty = 1;
            updateMinicart(item_id, qty);
        } else {
            updateMinicart(item_id, qty);
        }
    });


    /* MINICART FUNCTIONS */
    function refreshMiniCart(lineitem, quantity, callback) {
        if ($('body').hasClass('template-cart')) {
            window.location.reload();
        } else {
            $('.mini-cart-content #mincart-loading').show();
            $.ajax({
                method: "GET",
                url: "/cart",
                data: {
                    "view": "ajax"
                },
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'html',
                success: function (response) {

                    var listContentUpdate = ['.mini-cart-wrapper', '#cart-icon-bubble'];
                    let $response = $('<div>').append($(response));
                    for (let i of listContentUpdate) {
                        let data = $response.find(i).first().html();
                        $(i).html(data);
                    }

                    initSlideCartItem();
                    addScrollMiniCart();
                }
            });
        }
    }

    // Update Minicart
    function updateMinicart(product_id, product_quantity) {
        var id = product_id;
        var qty = parseInt(product_quantity);
        $.ajax({
            method: "POST",
            url: "/cart/update.js",
            data: "updates[" + id + "]=" + qty,
            dataType: "json",
            success: function (response) {
                $('.mini-cart-content #mincart-loading').show();
                refreshMiniCart();
            },
            error: function (XMLHttpRequest, textStatus) {
                $('.mini-cart-content #mincart-loading').hide();
                //handleError(XMLHttpRequest);
            }
        });
    }
    // End Minicart

    // Add Slick to Cart Slideout
    function initSlideCartItem() {
        $('.complete-routine .routine-content').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            centerPadding: '30px',
        });


        $('.mini-cart-content .bestsellers-content').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            draggable: true,
            // accessibility: false,
            // centerMode: true,
            variableWidth: true,
            // swipeToSlide: true
        });


    }

    initSlideCartItem();
    addScrollMiniCart();
    //confirm signup password
    $("#recoverPassword").click(function () {
        $(".recover-password-form").show();
        $(".login-form").hide();
        $("#login").hide();
        $("#recover").show();
    });
    $(".cancel-login").click(function () {
        $(".recover-password-form").hide();
        $(".login-form").show();
        $("#login").show();
        $("#recover").hide();
    });
})
