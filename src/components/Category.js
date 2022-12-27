import React from 'react';




const Category = (props) => {
    // const cat  = props.Category;
    return (
        <React.Fragment>
                <div className="cat card category" >
                    <img src={props.image} className='img-card card-img-top' alt="" />
                </div>
        </React.Fragment>
    );
}

export default Category;
