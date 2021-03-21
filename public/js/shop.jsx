class ImageCarousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {activeImage: 0};
		this.images = this.props.images;

		console.log(this.images);
	}

	/**
	 * @param {number} increment 
	 */
	clickHandler(increment) {
		this.setState(
			{activeImage: this.state.activeImage + increment}
		);
	}

	render() {
		
		/**
		 * @type {React.CSSProperties}
		 */
		const arrowStyle = {
			fontSize: "2rem",
			gridRow: "2 / 3",
			zIndex: 9000
		};

		let leftArrow = <i className="fas fa-chevron-circle-left" style={{...arrowStyle, gridColumn: 1}} onClick={() => this.clickHandler(-1)}></i>;
		let rightArrow = <i className="fas fa-chevron-circle-right"  style={{...arrowStyle, gridColumn: -1}} onClick={() => this.clickHandler(1)}></i>;

		const regex = /file[/]d[/](.+)[/]/;
		const fileID = this.images[this.state.activeImage].match(regex)[1];
		const fileURL = `https://drive.google.com/uc?id=${fileID}&export=download`;

		return (
			<div className="carousel">
				{this.state.activeImage > 0 ? leftArrow : <span></span>}

				<img src={fileURL} alt={`Image ${this.state.activeImage}`} style={{gridColumn: "1 / -1", gridRow: "1 / -1"}}></img>

				{this.state.activeImage < this.images.length - 1 ? rightArrow : <span></span>}
			</div>
		);
	}
}


class ProductCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {isActive: true};

		/**
		 * @type {string}
		 */
		this.productName = this.props.itemName;

		/**
		 * @type {string[]}
		 */
		this.description = this.props.itemDescription;

		/**
		 * @type {number}
		 */
		this.price = this.props.itemPrice;

		/**
		 * @type {string[]}
		 */
		this.images = this.props.itemImages;
	}

	changeFocus() {
		// 
	}

	render() {
		return (
			<div className="product-card">
				<i className="back-arrow fas fa-backspace"></i>
				<span className="product-name">{this.productName}</span>

				<ImageCarousel images={this.images}></ImageCarousel>

				<div className="product-content">
					<ul className="bullets">
						{this.description.map((bullet, i) => <li key={`${this.productName}-bullet-${i}`}>{bullet}</li>)}
					</ul>

					<span className="price">{`$${this.price.toFixed(2)}`}</span>
					<button className="add-to-cart">
						Add to Cart
					</button>
				</div>
			</div>
		);
	}
}


function initializeMarketplace() {
	const test = {
		"Name": "Flower Girl",
		"Price": 15,
		"Description": [
			"In support of Black Lives Matter",
			"Made with watercolors and string",
			"8\" x 10\" canvas"
		],
		"Images": [
			"https://drive.google.com/file/d/1PgPkNucAZNlGGwTtO_EwAe4VJkq9rLSf/view?usp=sharing",
			"https://drive.google.com/file/d/11HwsE0QV3nXGF3qAApD2_qlo7PWA24w-/view?usp=sharing"
		]
	};

	var testCard = <ProductCard itemName={test.Name} itemPrice={test.Price} itemDescription={test.Description} itemImages={test.Images}></ProductCard>;

	ReactDOM.render(testCard, document.getElementById("shopping"));
}

initializeMarketplace();
