<?php
/**
 * Страница 404 (Not Found)
 *
 */

get_header(); ?>
	<div id ="content">
		<div id="conttpc">
			<h1 id ="Tpc_header">404 - Такой страницы не существует</h1>
			<div id="page404">
				<p>Возможно вы допустили <strong>ошибку</strong> в URL адресе, или эта страница была <strong>удалена</strong>.</p>
				<div id="page404contf">
					<p>Попробуйте воспользоваться поиском:</p>
					<div class="ya-site-form ya-site-form_inited_no" onclick="return {'action':'http://modernimport.by/search','arrow':true,'bg':'#3e7acc','fontsize':12,'fg':'#333333','language':'ru','logo':'rb','publicname':'Поиск для modernimport.by','suggest':true,'target':'_self','tld':'ru','type':3,'usebigdictionary':true,'searchid':2145489,'webopt':false,'websearch':false,'input_fg':'#333333','input_bg':'#ffffff','input_fontStyle':'normal','input_fontWeight':'normal','input_placeholder':'Что будем искать?','input_placeholderColor':'#999999','input_borderColor':'#333333'}"><form action="http://yandex.ru/sitesearch" method="get" target="_self"><input type="hidden" name="searchid" value="2145489"/><input type="hidden" name="l10n" value="ru"/><input type="hidden" name="reqenc" value=""/><input type="text" name="text" value=""/><input type="submit" value="Найти"/></form></div><style type="text/css">.ya-page_js_yes .ya-site-form_inited_no { display: none; }</style><script type="text/javascript">(function(w,d,c){var s=d.createElement('script'),h=d.getElementsByTagName('script')[0],e=d.documentElement;if((' '+e.className+' ').indexOf(' ya-page_js_yes ')===-1){e.className+=' ya-page_js_yes';}s.type='text/javascript';s.async=true;s.charset='utf-8';s.src=(d.location.protocol==='https:'?'https:':'http:')+'//site.yandex.net/v2.0/js/all.js';h.parentNode.insertBefore(s,h);(w[c]||(w[c]=[])).push(function(){Ya.Site.Form.init()})})(window,document,'yandex_site_callbacks');</script>
				</div>
			</div>
		</div>
	</div>
<?php get_footer(); ?>