<div class="header">
    <div class="header-content">
        <div class="header-content-block block1">
            <a class="block1-logotype" href="<?php echo esc_url(home_url('/')); ?>"
               title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">
                <img class="block1-logotype-image" alt="Логотип предприятия по продаже футболок, маек, рубашек" ;
                     title="Оптовая продажа различного трикотажа: майки, толстовки, рубашки-поло, кепки"
                     src="<?php bloginfo('template_url'); ?>/images/logoNew.png"/>
            </a>
        </div>
        <div class="header-content-block block2">
            <div class="block2-top"><?php bloginfo('name'); ?></div>
            <div class="block2-bottom">
                <div class="block2-bottom-image">
                    <img alt="phone" src="<?php bloginfo('template_url'); ?>/images/telephone.png"/>
                </div>

                <div class="block2-bottom-phones">
                    <p>+375 29 704-95-82</p>
                    <p>+375 29 697-78-61</p>
                </div>

                <div class="block2-bottom-phones ">
                    <p>+375 17 207-30-38</p>
                    <p>+375 17 207-30-74</p>
                </div>
            </div>
        </div>
        <div class="header-content-block block3">
            <a class="block3-basket" href="<?php echo esc_url(home_url('/')); ?>korzina/" title="Перейти в корзину">
                В корзине товара:
                    <span>
                        <?php
                        global $woocommerce;
                        $cart_contents_count = $woocommerce->cart->cart_contents_count;
                        echo $cart_contents_count . ' ';
                        ?>
                    </span>
                шт.
            </a>
        </div>
        <div class="header-content-block block4">
            <p>Официальный дилер на территории Республики Беларусь</p>
        </div>
    </div>
</div>