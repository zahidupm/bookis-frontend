import React from 'react';

const CategoryModal = ({treatment}) => {
    const {title} = treatment;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="category-modal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryModal;