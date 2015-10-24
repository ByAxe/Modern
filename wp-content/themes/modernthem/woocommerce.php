<?php get_header(); ?>
			<div id ="content">
				<div id="conttpc">
                    <h1 id ="Tpc_header"><?php the_title(); ?></h1>
                    <?php kama_breadcrumbs(); ?>
                    <?php woocommerce_content(); ?>
				</div>
			</div>
<?php get_footer(); ?>