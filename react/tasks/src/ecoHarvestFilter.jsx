import React from "react";
import './ecoHarvestFilter.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

export class EcoHarvestFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['Fruits', 'Vegetables', 'Dried fruits', 'Dried vegetables'],
            products: [],
            filterProducts: [],
            activeCategory: null,
        }
    }

    componentDidMount() {
        const products = [
            {
                name: 'Rich May',
                category: this.state.categories[0],
                image: 'assets/image/peach.png',
            },
            {
                name: 'Summer Sweat',
                category: this.state.categories[0],
                image: 'assets/image/peach2.png',
            },
            {
                name: 'White Fresh',
                category: this.state.categories[0],
                image: 'assets/image/peach3.png',
            },
            {
                name: 'Peach Flat',
                category: this.state.categories[0],
                image: 'assets/image/peach4.png',
            },
            {
                name: 'Tomato',
                category: this.state.categories[1],
                image: 'assets/image/tomato.jpg',
            },
            {
                name: 'Basilica',
                category: this.state.categories[1],
                image: 'assets/image/basilica.jpg',
            },
            {
                name: 'Garlic',
                category: this.state.categories[1],
                image: 'assets/image/garlic.jpg',
            },
            {
                name: 'Dill',
                category: this.state.categories[1],
                image: 'assets/image/dill.jpg',
            },
            {
                name: 'Dried Apricot',
                category: this.state.categories[2],
                image: 'assets/image/apricot.jpg',
            },
            {
                name: 'Nut',
                category: this.state.categories[2],
                image: 'assets/image/nut.jpg',
            },
            {
                name: 'Walnut',
                category: this.state.categories[2],
                image: 'assets/image/walnut.jpg',
            },
            {
                name: 'Dried Apple',
                category: this.state.categories[2],
                image: 'assets/image/apple.jpg',
            },
            {
                name: 'Dried Spinach',
                category: this.state.categories[3],
                image: 'assets/image/spinach.jpg',
            },
            {
                name: 'Dried Dill',
                category: this.state.categories[3],
                image: 'assets/image/driedDill.jpg',
            },
            {
                name: 'Dried Mint',
                category: this.state.categories[3],
                image: 'assets/image/mint.jpg',
            },
            {
                name: 'Dried Parsley',
                category: this.state.categories[3],
                image: 'assets/image/parsley.jpg',
            }
        ]
        this.setState({
            products: products.slice(0, 4),
            filterProducts: products,
            activeCategory: this.state.categories[0]
        });
    }

    filterProducts = (category) => {
        const filteredProducts = this.state.filterProducts.filter((product) => product.category === category)
        this.setState({
            products: filteredProducts,
            activeCategory: category
        });
    }

    render() {
        return (
            <main id='products'
                  className='d-flex flex-column justify-content-center align-items-center position-relative'>
                <img src="assets/image/shape1.png" alt="" className='position-absolute top-0 start-0'/>
                <img src="assets/image/shape4.png" alt="" className='position-absolute bottom-0 start-0'/>
                <img src="assets/image/shape2.png" alt="" className='position-absolute top-0 end-0'/>
                <img src="assets/image/shape3.png" alt="" className='position-absolute bottom-0 end-0'/>
                <h1 className='text-center'>
                    Our Product
                </h1>
                <section className='d-flex flex-column justify-content-center align-items-center'>
                    <div id="filter">
                        {this.state.categories.map((category) => (
                            <button key={category}
                                    className={"btn position-relative border-0 px-4" + (category === this.state.activeCategory ? ' active' : '')}
                                    onClick={this.filterProducts.bind(this, category)}>
                                {category}
                            </button>
                        ))}
                    </div>
                    <img src="assets/image/2.png" alt=""
                         className='position-absolute top-50 start-50 translate-middle'/>
                    <div className='d-flex justify-content-evenly'>
                        {this.state.products.map((product) => (
                            <div key={product.name} className='product position-relative'>
                                <img src={product.image} alt={product.name} className='border border-1 w-100 mb-4'/>
                                <div className='text-center'>
                                    <a href="#!" className="text-decoration-none text-dark">
                                        {product.name}
                                    </a>
                                </div>
                                <div
                                    className="bg w-100 h-100 position-absolute opacity-0 border-0 top-50 start-50 translate-middle text-center">
                                    <a href="#!"
                                       className='position-absolute top-50 start-50 translate-middle bg-white rounded-circle'>
                                        <i className="fas fa-search"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        )
    }
}