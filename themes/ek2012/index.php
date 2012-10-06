<?php get_header(); ?>
<?php get_template_part('/partials/home', 'carousel') ?>
<div class="row">
	<div class="span8" id="main">
		<?php get_template_part('/partials/view-controls') ?>
		<div id="post-list" class="grid">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<?php get_template_part('/partials/loop', 'post') ?>
				<?php endwhile; ?>
			<?php endif; ?>
		</div> <!-- /#post-list -->
	</div> <!-- /#main -->
	<div class="span4" id="sidebar">
		<!-- Ad slot -->
		<div id="ad-slot-1">
			<img src="http://www.dummyimag.es/300x250/000/fff.png&text=300x250%20AD%20UNIT">
		</div> <!-- /#ad-slot-1 -->



		<!-- Widget -->
		<div class="widget facebook">
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			</script>
			<h4>EK Comrades</h4>
			<div class="content">
				<div class="facebookOuter">
					<div class="fb-like-box" 
					data-href="https://www.facebook.com/pages/Empty-Kingdom/151292131589404" 
					data-width="292" 
					data-show-faces="true" 
					data-border-color="#F5F5F5" 
					data-stream="false" 
					data-header="false"></div>
				</div>
			</div> <!-- /.content -->
		</div> <!-- /.widget -->

		<?php dynamic_sidebar('Right Sidebar') ?>
		
		<!-- Widget -->
		<div class="widget trending">
			<h4>Trending Articles on EK</h4>
			<ul class="unstyled">
				<li><img src="http://www.dummyimag.es/770x395/999/fff.png&text=322x165"></li>
				<li><img src="http://www.dummyimag.es/770x395/999/fff.png&text=322x165"></li>
				<li><img src="http://www.dummyimag.es/770x395/999/fff.png&text=322x165"></li>
				<li><img src="http://www.dummyimag.es/770x395/999/fff.png&text=322x165"></li>
				<li><img src="http://www.dummyimag.es/770x395/999/fff.png&text=322x165"></li>
				<li><img src="http://www.dummyimag.es/770x395/999/fff.png&text=322x165"></li>
			</ul> <!-- /.content -->
		</div> <!-- /.widget -->
		
		<div class="widget widget_text">
			<h4 class="featured-archive"><a href="" class="arrow-right">EK Featured Article Archive</a></h4>
		</div>

	</div> <!-- /#sidebar -->
</div> <!-- /.row -->
<?php get_footer(); ?>