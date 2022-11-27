import React from 'react';
import swal from 'sweetalert';
import '../../Auth/Auth.css';

const AddProduct = () => {

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
                            <input type="email" className="pm-form-control focus:outline-orange-400" id="email" name="email" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                            
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="name" className="pm-form-label">Name</label>
                            <input type="text" className="pm-form-control focus:outline-orange-400" id="name" name="name" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
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