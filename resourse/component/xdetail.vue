<template>
	<div>
		<div class="m-title">
			{{this.$parent.$store.state.title}}
		</div>
		<div class="m-info">
			<span class="h-time">2017-11-10</span>
			<span>
				来源： 
				<em id="source"> {{this.$parent.$store.state.source}}</em> 
			</span>
		</div>
		<div class="m-detail">
			<img id="detailImg" :src="this.$parent.$store.state.img" alt="" />
			<p>　　古老厚重而又生生不息的乡村，在历史的变革中沉沉浮浮，阅尽沧桑。</p>
			<p>　　经历工业化、城市化、信息化的一波波冲击，乡村空心化、老龄化、边缘化的社会焦虑日益深重。然而，山重水复，又见柳暗花明。当下有多路资本在高层决策的引领和市场需求的激励下，跋山涉水纷纷进村，安营扎寨创业创新，在广袤的原野上生发出万千气象。</p>
			<p>　　乡村敞开门户，期盼的是革新，是再生，是复兴。</p>
			<p style="TEXT-ALIGN: center" align="center"><img id="{23646167-3CBC-424B-BA23-32BC4625A79E}" alt="" src="1121935221_15102816199771n.jpg"></p>
			<p style="TEXT-ALIGN: center" align="center">
				<font color="navy" face="楷体">　　图为河北涉县涉城镇一处特色民宿 牟宇/摄</font>
			</p>
			<p>
				<font size="+0">
					<font color="navy"><strong>　　资本进村推动现代乡建</strong></font>
				</font>
			</p>
			<p>　　翻开报章，打开网络，我们目睹着资本气势如虹的潮动——</p>
			<p>　　工商资本进村：尤以房地产企业最为耀眼，在城市遭遇政府“史上最严”的宏观调控之后，迅疾挥师转向，推出各具特色的“小镇计划”：以碧桂园、时代地产为代表的科技型服务小镇，以绿城、蓝城为代表的农业小镇，以华侨城为代表的文旅小镇，以华夏幸福为代表的产业小镇。许多特色小镇的布局正是以乡村为基地而展开。</p>
			<p>　　文化资本进村：越来越多的艺术家、建筑师、设计师和文艺青年投身乡村旅游发展，创建艺创小镇，打造艺术家乡居、博物馆式民宿和景区化文化院落。一批批文化人抱持理想，深入乡村，探索新型乡村建设模式。</p>
			<p>　　家庭资本进村：“市民下乡”已在多地蔚然成风。武汉市政府大张旗鼓，正式颁布“市民下乡”的红头文件，给了“黄金二十条”优惠政策，鼓励能人回乡、企业家下乡、知识分子下乡、市民下乡，以租赁、合作方式利用农村空闲农房创业创意、休闲养老养生，促进农村集体经济组织和农民增加财产性收入，加快新农村建设步伐。</p>
			<p>　　从当年的资本下乡耕耘田野发展现代农业，到当下的资本进村置业创业推进现代乡建，我们依稀可见资本转型的丝丝轨迹，也清晰可闻乡村复兴的脚步声声。</p>
			<p>　　政府暖风劲吹，持续为资本进村推波助澜、指引方向——</p>
			<p>　　2016年底，国家旅游局和农业部联合发布《关于组织开展国家现代农业庄园创建工作的通知》，计划到2020年建成100个国家现代农业庄园。2017年中央“一号文件”首次提出，“支持有条件的乡村建设以农民合作社为主要载体、让农民充分参与和受益，集循环农业、创意农业、农事体验于一体的田园综合体”。2016年6月，住建部、国家发改委、财政部决定在全国范围开展特色小镇培育工作。2017年7月国务院发文，要求“加快建设农产品加工特色小镇，实现产城融合发展”……</p>
			<p>　　当然，资本的活力涌流，更深层的还是源自市场的巨大需求。</p>
			<p>　　正在勃兴中的乡村旅游，为乡村的复兴注入了蓬勃的生机。中国社科院舆情调查实验室发布的《中国乡村旅游发展指数报告》指出，2016年是中国“大乡村旅游时代”的元年。未来乡村旅游热还将持续10年以上，2025年将达近30亿人次。各地还充分发挥乡村乡土资源富集优势，利用“旅游+”、“生态+”等模式，实现农业文化旅游“三位一体”，生产生活生态同步改善，一二三产业深度融合。</p>
			<p>　　于是，我们看到了乡村原野丰饶的孕育和旺盛的生长：民宿，生态园，现代农庄，田园综合体，农业特色小镇，一簇簇，一片片，雨后春笋般破土而出。</p>
			<p>
				<font color="navy"><strong>　　唤醒资产，发现价值，重构格局</strong></font>
			</p>
			<p>　　资本进村，不仅加速农业的转型升级，而且将促进村庄自然形态文化肌理的修复，助推农民生活风貌发展方式的进步，撬动城乡历史格局治理结构的转型。</p>
			<p>　　土地，农民脚下沉寂的资产终于被改革唤醒。</p>
			<p>　　土地是农民最重要的生产资料，也是农民最宝贵的经营资产。当年中央文件首提“创造条件让更多群众拥有财产性收入”，许许多多的城市居民闻风而动，捷足先登，在股市楼市中上演了一幕幕平民逆袭的财富故事。但是对收入分化中的农民而言，如何从土地的经营中品尝到政策的获得感，至今还是一个难解的问题。</p>
			<p>　　改革不容迟滞。亟应明晰和保障农民财产权利，探索提高农民取得财产性收益的多种实现形式和有效途径。</p>
			<p>　　农地入市的改革已经开始破题：2014年底，集体经营性建设用地入市改革试点启动，与国有土地同价同权，享有转让、出租、抵押等各项权能。</p>
			<p>　　农村集体用地进入租赁市场已敲响开场锣鼓：不仅村镇集体土地可以直接成为租赁住房用地，而且村镇集体经济组织可以自行开发运营，也可以通过联营、入股等方式建设运营集体租赁住房。</p>
			<p>　　农村宅基地还权赋能也已提上改革日程：保障农户宅基地用益物权，改革完善农村宅基地制度，慎重稳妥推进农民住房财产权抵押、担保、转让，探索农民增加财产性收入渠道。根据我国现行法律法规，宅基地使用权只能在该集体经济组织的成员间流转。能否突破“红线”，让农村宅基地流转有条件地向城里人或外来资本开放?赞同者有之：农村的土地等生产要素应当允许自由进入市场，与城市资本按照市场原则对接、合作。反对者亦有之：城里人自由到农村购买民宅，农民的居住权必将受到冲击，农村宅基地也可能扩张失序。亦有专家提议，或可借鉴农村土地所有权、承包权、经营权三权分置方式，使市民下乡租赁农房有法可依，有规可治。</p>
			<p>　　乡村，长期贬抑的价值被重新发现。</p>
			<p>　　在绿水青山的描画中，在乡土文化的重建中，一处处乡村洗却满面尘灰，焕发美丽容颜。丰富的资源被展示，沉潜的价值被发现，多样的功能被认识——</p>
			<p>　　现代农业不仅仅供给我们以食物，还供给我们以农田景观、农作乐趣、稼穑教育以及各种创意产品。新型乡村不仅是传统的农业生产地和农民聚居地，还有维护自然肌理的保育生态功能、涵养乡愁乡韵的文化传承功能、开拓特色产业的经济发展功能、优化城乡布局的社会建构功能以及满足舒适人居的生活保障功能。这些功能相互促进，相互融合，激发出朴素活泼、刚健有力的源源生命能量，催生着跨界融合、共享发展的新型村庄形态。这种田园风、特色化的村落生态，牧歌式、慢节奏的乡村生活，日益显现其稀缺资源的价值。</p>
			<p>　　城乡关系，固化中的二元格局在剧烈重构。</p>
			<p>　　乡村的复兴，标志着乡村内在活力新的释放、小康建设新的起步，标志着国家城乡关系新的转型、二元格局新的构建。</p>
			<p>　　翻开历史，当初农民在压抑的统购粮价和僵硬的户籍区隔中贡献着中国工业化高歌猛进的原始积累。后来，又在行政强制的低价征地和政府推行的拆迁上楼中构筑起中国城市化高速崛起的坚强支柱。以农补工、以乡补城，不变的是对乡村经济资源和生产要素的单一汲取，变动的是从征收农业赋税到占有农村土地增值的直接转换。</p>
			<p>　　改革在不断深入，原野上升腾起缕缕希望之光。党的十六大，正式提出统筹城乡经济社会发展，开启了中国城乡关系的历史性转轨;党的十七大，首次提出“城乡经济社会一体化”，中国进入了城乡加快融合新阶段;党的十八大以来，中央进一步提出将工业与农业、城市与乡村、城镇居民与农村居民作为一个整体纳入到全面建成小康社会的全过程中，逐步实现城乡居民基本权益平等化、城乡公共服务均等化、城乡居民收入均衡化、城乡要素配置合理化，以及城乡产业发展融合化。党的十九大，正式提出“建立健全城乡融合发展体制机制和政策体系，加快推进农业农村现代化”。</p>
			<p>　　从单向城市化到城乡一体化，人口在城乡之间对流，资本在城乡之间布局，土地在城乡之间配置。</p>
			<p>
				<font color="navy"><strong>　　给资本进村套上3个“箍”</strong></font>
			</p>
			<p>　　资本进村，看好的是乡村蕴藏的潜力和崭露的前景。广大农民在这场乡村的复兴中会抱有什么样的期待，将收获什么样的果实?</p>
			<p>　　资本进村，农民的主体地位不能动摇。</p>
			<p>　　广大游客可以从乡村的美丽中欣赏烂漫风光，城市居民可以从乡村的古朴中咀嚼浓浓乡愁，各路资本可以从乡村的资源中开发无限商机，但是，最核心最根本的还是要让本土村民能够从乡村的活力展现中把握幸福生活的美好梦想。</p>
			<p>　　尊重农民的主体地位，保障农民的合法权益，开拓农民的发展空间。这是乡村建设的基本原则，也应是资本进村的价值坚守。发展现代农庄、田园综合体和农业特色小镇，重在提高农民的组织程度，开拓农民的就业空间，培育农民的创业能力，增加农民的财产收入，美化农民的居住环境，提升农民的生活品质，给那些日渐萧条的乡村注入新的活力，引领新农村建设持续向纵深推进。</p>
			<p>　　资源开发，农民的合法权益不得侵害。</p>
			<p>　　毋庸讳言，当下不少资本进村的目的就是圈地占房，赶紧抢先占有那些鲜为人知的“风水宝地”和未被定价的宝贵资源，或精心包装，高价转租获利，或创意策划，打造农庄小镇坐待资产升值。有些地方的特色小镇建设已经出现明显的房地产化倾向，既造成土地资源的浪费，又易引发侵犯农民土地利益的事件发生。</p>
			<p>　　乡村的复兴，决不能演变成对农民或隐或显的“挤出”过程。兴建农业特色小镇，绝不是简单化地让村民搬离故居。发展乡村旅游产业，也不能排斥农民的积极参与，用围墙将农民排除在外。农民从主体变成了看客，如何保障他们的发展权利?</p>
			<p>　　还需警惕企业和政府的急功近利。只考虑表面化的形象建设，不顾及根本性的内力培育;只考虑高大上的景观再造，不顾及原生态的环境保护;只考虑短平快的经济利益，不顾及可持续的全面发展。把成本、代价让农民去背，把问题、风险留给农民去担，掠取经济利益而放弃社会责任，这就扭曲了乡村建设的方向。</p>
			<p>　　路径创新，农民的长远发展不可忽略。</p>
			<p>　　如何在改革的进程中创新机制，搭建平台，锻造载体，保障、促进、推动乡村的永续运行和农民的长远发展?</p>
			<p>　　起步先行的乡村，已有不少成功的探索——</p>
			<p>　　看“颜宅模式”。浙江省青田县颜宅村地处高山，生态优美，农户主动选择腾出自家闲置房屋入股，集体开发、集体经营、集体收益，既保障了农户的收益，又保障了村集体和民宿经营者的利益。看“温岭经验”。浙江省温岭市不少乡村“屋咬山、山抱屋”的石砌建筑之美，引得许多投资者前来开发“民宿富矿”。这些乡村发扬当地民主恳谈会这一自治传统，坚持民主参与，民主决策，先做好老屋保护，再引入民宿有序进入，既保障了合理开发永续发展，又提升了资产价值、农民收益。看“战旗创造”。成都市郫县战旗村借助集体经营性建设用地入市试点契机，由村集体自建特色小镇。村民代表发起成立资产管理公司，进行旅游等项目开发和运营，既增强了农村经济稳定性，农民利益也更有保障。</p>
			<p>　　我们期待，复兴中的乡村，不仅有美丽的乡愁，更有幸福的乡亲;不仅可以满足城市人对于传统乡村的怀念，而且能够提振乡村人对于乡村未来的信心。（作者：张正宪）</p>
		</div>
		<section class="m-qr-code">
			<div class="img-full"><img src="http://www.xinhuanet.com/m/img/weixinQRcode.png"></div>
			<p class="txt">微信扫描二维码，关注新华网</p>
		</section>
		<div class="m-hot-wap">
			<div class="m-column">热点推荐</div>
			<ul class="m-hot m-ul thumb pack">
				<li class="thumb-item" v-for="n in news">
					<a href="http://m.news.cn/video/2017-11/10/c_129737325.htm" class="thumb-img" target="_blank"><img :src="n.img"></a>
					<div class="thumb-info">
						<h3 class="thumb-tit"><a href="http://m.news.cn/video/2017-11/10/c_129737325.htm" target="_blank">{{n.title}}</a></h3>
						<div class="thumb-extra"><span class="source">{{n.source}}</span></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="de-login" id="login">
			<a href="#/newsLogin" >登录</a>
			<a href="#/newsRegister">注册</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				news: [],
				bool: false,
				
			}
		},
		methods: {
			getNews(){
				var _this = this;
				$.ajax({
					type:"get",
					url:"../resourse/json/xinhua.json",
					success: function(data){
						// console.log(data.length);
						var newArr = _this.news.concat(data);
						for(var i = 0; i < 5; i++){
							var num = parseInt(Math.random() * 240);
							_this.news = _this.news.concat(newArr[num]);
						}
					}
				});
			}
		},
		
		mounted(){
			this.getNews();
		},
	}
</script>

<style lang="scss" scoped>
	li{
		list-style: none;
	}
	.m-title {
		padding: 0.7rem;
		margin-top: 0.3rem;
		font-size: 0.7rem;
		font-weight: 600;
		text-align: center;
		line-height: 1rem;
	}
	
	.m-info {
		margin: 0 0.62rem ;
		padding: 0.37rem 0;
		font-size: 0.5rem;
		text-align: center;
		color: #acacac;
		border-bottom: 0.03rem solid #ccc;
	}
	
	em {
		font-style: normal;
	}
	
	.m-detail {
		padding: 0.37rem;
		font-size: 0.58rem;
		line-height: 1rem;
	}
	
	.m-qr-code {
		text-align: center;
		img {
			width: 50%;
			height: auto;
			margin: 0 auto;
		}
	}
	.txt{
		font-size: 0.3rem;
	}
	
	.m-column {
		position: relative;
		margin: 0.37rem 0;
		padding-top: 0.62rem;
		padding-left: 0.43rem;
		font-size: 0.62rem;
		&:before {
			content: "";
			display: block;
			position: absolute;
			top: -0.37rem;
			left: 0;
			width: 100%;
			height: 0.37rem;
			background-color: #EDEDED;
		}
		&:after {
			content: "";
			display: block;
			position: absolute;
			top: 0.68rem;
			left: 0;
			width: 0.12rem;
			height: 0.68rem;
			background-color: #348CEC;
		}
	}
	
	.m-ul li {
		width: 90%;
		margin: 0 auto 0.31rem;
		border-bottom: 0.03rem solid #EDEDED;
	}
	
	.thumb-item {
		position: relative;
		padding: 0.37rem 0;
		border-bottom: 0.03rem solid #eee;
		&:after {
			content: '.';
			visibility: hidden;
			height: 0;
			display: block;
			clear: both;
		}
	}
	
	.m-ul .thumb-img {
		float: left;
		padding-bottom: 0;
		width: 4rem;
		height: 3rem;
		background: #eee url(http://www.xinhuanet.com/m/img/placeholder.png) no-repeat center center;
		-webkit-background-size: 50% auto;
		background-size: 50% auto;
		overflow: hidden;
	}
	
	.m-ul a {
		display: block;
		margin-bottom: 0.31rem;
		padding-bottom: 0.31rem;
		font-size: 0.5rem;
		color: #000000;
		line-height: 0.75rem;
	}
	
	.m-ul .thumb-img img {
		width: 4rem;
		height: 3rem;
	}
	
	.thumb-info {
		float: right;
		position: relative;
		width: 4.5rem;
		height: 3rem;
	}
	
	.thumb-tit {
		font-size: 0.3rem;
		line-height: 1.5rem;
		height: 2.18rem;
		overflow: hidden;
	}
	
	.thumb-extra {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 0.62rem;
		font-size: 0.5rem;
	}
	
	.thumb-extra span {
		float: right;
		font-size: 0.43rem;
		color: #aaa;
	}
	
	.de-login {
		width: 4.75rem;
		margin: 0.62rem auto;
		overflow: hidden;
		a {
			cursor: pointer;
			font-size: 0.37rem;
			display: block;
			text-align: center;
			color: #348cec;
			float: left;
			padding: 0.12rem 0.62rem;
			border: 1px solid #beddff;
			margin-left: 0.31rem;
			border-radius: 0.09rem;
			background: #eff7ff;
		}
	}
	
	.de-login {
		width: 4.75rem;
		margin: 0.62rem auto;
		overflow: hidden;
		a {
			cursor: pointer;
			font-size: 0.37rem;
			display: block;
			text-align: center;
			color: #348cec;
			float: left;
			padding: 0.12rem 0.62rem;
			border: 1px solid #beddff;
			margin-left: 0.31rem;
			border-radius: 0.09rem;
			background: #eff7ff;
		}
	}
	#detailImg{
		width: 9rem;
    	height: 5rem;
    	margin-left: 0.133rem;
	}
</style>