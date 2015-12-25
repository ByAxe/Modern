<?php get_header(); ?>
    <div id="conttpc">
        <h1 id="conttpc-headline"><?php wp_title("", true); ?></h1>
        <?php kama_breadcrumbs(); ?>
        <?php if (is_active_sidebar('left_sidebar')) : ?>
            <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
                <?php dynamic_sidebar('left_sidebar'); ?>
            </div>
        <?php endif; ?>
        <?php woocommerce_content(); ?>
    </div>
<?php get_footer(); ?>