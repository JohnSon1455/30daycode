<style>
	p{
		font-family: sans-serif;
		/* 字型 */
		font-size: 1em;
		/* 相對父層大小 */
		font-size: 1rem;
		/* 相對跟元素大小 */
		font-weight: bold;
		/* 文字粗細 */
		font-style: italic;
		/* 斜體 */
		text-decoration: none;
		line-height: 1;
		/* 行高 */
		color: rgb(255, 255, 255);
		text-indent: 1em;
		/* 首行縮排 */
		text-align: center;
		/* 文字對齊 */
		letter-spacing: 1em;
		/* 中文文字間距離 */
		direction: rtl;
		/* inline物件排列方向 */
		word-spacing: 1em;
		/* 英文單字間空格差異 */
		font: small-caps italic bold 66px/70px arial;
		/* 將所有文字屬性結合一組 */
	}

	
	div{
		background-color: rgb(120, 102, 120);
		background-image: url();
		/* 背景圖片 */
		background-image: linear-gradient(to left ,起始色彩, 結束色彩);
		background-image: linear-gradient(角度, 起始色, 起始位置, 結束色彩, 結束位置);
		background-position: 水平位置(x), 垂直位置(y);
		background-repeat: repeat;
		/* 圖片填滿block (x,y) */
		background-size: cover;
		/* 不變形等比塞滿block */
		background-attachment: fixed;
		/* 固定背景圖不隨畫面拉動而移動 */
		background: color image attachment repeat poition / size
	}

	h1{
		border-width: 上邊框粗細   右邊框粗細   下邊框粗細   左邊框粗細;
		width: 100％;
		/* inline不支援寬高設定 */
		margin: 上  右  下   左;
		/* 將剩餘可用空間做分配 */
		margin: 上   [右左]    下;
		margin: [上下]   [右左];
		box-sizing: border-box;
		/* 會將盒子直接訂成設定寬度，裡面大小變動會造成折行 */
	}

	div{
		display: block;
		/* 屬性轉成block */
		display: inline;
		/* 屬性轉成inline */
		display: inline-block;
		/* block有inline特性 */
		position: relative;
		position: absolute;
		position: fixed;
		/* 隨著捲動一起移動，定在畫面某個位置 */
		position: sticky;
		/* 畫面捲動會定住，超過父層就不見 */
	}

</style>