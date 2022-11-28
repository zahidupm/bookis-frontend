import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/auth.context';
import '../../Auth/Auth.css';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const navigate = useNavigate();

    const {data: categories, isLoading} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categoryName`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    const handleCategory = (e) => {
        e.preventDefault();
        const category_id = e.target.category_id.value
        const category_name= e.target.category_name.value;
        
        const category = {
            category_id,
            category_name
        }
        // console.log(category);
        fetch(`http://localhost:5000/categoryName`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                console.log(data);
                swal({ title: "Category created successfully!",icon: "success", });
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const Seller = e.target.Seller.value;
        const category_name = e.target.category_name.value;
        const category_id = e.target.category_id.value;
        const image_url = e.target.image_url.value;
        const title = e.target.title.value;
        const original_price = e.target.original_price.value;
        const resale_price = e.target.resale_price.value;
        const phone = e.target.phone.value;
        const location = e.target.location.value;
        const years_of_use = e.target.years_of_use.value;
        const details = e.target.details.value;

        const product = {
            email,
            Seller,
            category_name,
            category_id,
            image_url,
            title,
            original_price,
            resale_price,
            phone,
            location,
            years_of_use,
            details
        }
        console.log(product);
        // const formData = new FormData();
        // const image_url = e.target.image_url.files[0];
        // console.log(image_url);
        // formData.append('image_url', image_url);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgData => {
        //     console.log(imgData)
        // })

        //save product database
        fetch('http://localhost:5000/categories', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            swal({title: 'Product Added Successful', icon: 'success'})
            navigate('/dashboard/my_products')
        })
    }

    return (
        <div className=''>
            <div>
            <div className='add-product add-category h-84'>
                <div className="pm-container-fluid w-full bg-[#f2f2f2]">

                <div className="pm-main-sign-up md:pl-[50px] lg:pl-[392px]">
                    <div className="left-section">
                        <iframe title='animation' className='w-full h-full' src="https://embed.lottiefiles.com/animation/70315"></iframe>
                    </div>

                <div className="right-section ">
                    <div className="heading">
                        <h4>Add A New Category</h4>
                        
                    </div>

                    <form onSubmit={handleCategory} id="sign-up-form">
                        <div className="pm-form-group">
                            <label htmlFor="category_id" className="pm-form-label">Category Id</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="category_id" name="category_id" autoFocus="" autoComplete="off" placeholder='Exp: 01' autoCapitalize="none" spellCheck="true" required />
                            
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="category_name" className="pm-form-label">Category Name</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="category_name" name="category_name" autoComplete="off" placeholder='Exp: History' autoCapitalize="none" spellCheck="true" required />
                        </div>

                        <div className="pm-form-group">
                            <button type="submit" className="bg-orange-500 pmt_sign-up-btn pm-btn pm-btn-primary sign-up-btn g-recaptcha" id="sign-up-btn">
                            Add A New Category
                            </button>
                        
                        </div>
                    </form>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className='add-product'>
                <div className="pm-container-fluid w-full bg-[#f2f2f2]">

                <div className="pm-main-sign-up md:pl-[50px] lg:pl-[392px]">
                    <div className="left-section">
                        <iframe title='animation' className='w-full h-full' src="https://embed.lottiefiles.com/animation/70315"></iframe>
                    </div>

                <div className="right-section ">
                    <div className="heading">
                        <h4>Add A Product</h4>
                        
                    </div>

                    <form onSubmit={handleSubmit} id="sign-up-form">
                        <div className="pm-form-group">
                            <label htmlFor="email" className="pm-form-label">Email</label>
                            <input type="email" defaultValue={user?.email} disabled className="pm-form-control focus:outline-orange-400" id="email" name="email" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                            
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="Seller" className="pm-form-label">Seller Name</label>
                            <input type="text" defaultValue={user?.displayName} disabled className="pm-form-control focus:outline-orange-400" id="Seller" name="Seller" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="" className="pm-form-label">Category Name</label>
                            <select name="category_name" className="select focus:outline-orange-400 select-secondary w-full max-w-xs">
                                <option disabled selected>Select Your Category Name</option>
                                {
                                    categories?.map((category, i) => <option
                                    key={i}
                                    value={category.category_name}
                                    >{category.category_name}</option>)
                                }
                            </select>
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="" className="pm-form-label">Category Id</label>
                            <select name='category_id' className="select focus:outline-orange-400 select-secondary w-full max-w-xs">
                                <option disabled selected>Select Category Id Make Sure Correct Id</option>
                                {
                                    categories?.map((category, i) => <option
                                    key={i}
                                    value={category.category_id}
                                    >{category.category_id}</option>)
                                }
                            </select>
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="image_url" className="pm-form-label">Image URL</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="image_url" name="image_url" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="condition" className="pm-form-label">Condition</label>
                            <select name='condition' className="select focus:outline-orange-400 select-secondary w-full max-w-xs">
                                <option disabled selected>What is the Product Condition</option>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="title" className="pm-form-label">Product Title</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="title" name="title" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="original_price" className="pm-form-label">Original Price</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="original_price" name="original_price" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="resale_price" className="pm-form-label">Resale  Price</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="resale_price" name="resale_price" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="phone" className="pm-form-label">Mobile Number</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="phone" name="phone" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="location" className="pm-form-label">Location</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="location" name="location" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="years_of_use" className="pm-form-label">Year of Purchase</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="years_of_use" name="years_of_use" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="details" className="pm-form-label">Description</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="details" name="details" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>

                        <div className="pm-form-group">
                            <button type="submit" className="bg-orange-500 pmt_sign-up-btn pm-btn pm-btn-primary sign-up-btn g-recaptcha" id="sign-up-btn">
                            Add A Product
                            </button>
                        
                        </div>
                    </form>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;