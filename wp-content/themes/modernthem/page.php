<?php get_header(); ?>
			<div id ="content">
				<div id="conttpc">
					<?php    while ( have_posts() ) : the_post(); ?>
								<h1 id ="conttpc-headline"><?php the_title(); ?></h1>
								<?php kama_breadcrumbs(); ?>
								<?php the_content(); ?>
					<?php	 endwhile;?>	
				</div>
			</div>
<?php get_footer(); ?>