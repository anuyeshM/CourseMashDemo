import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { singleContext } from '../../App';
import '../../../node_modules/react-bootstrap';
import Review from '../Reviws/Review'
import Button from '@material-ui/core/Button';




const SingleCourse = () => {
    //context data 
    const courses = useContext(singleContext)
    //for collect url dynamic param value
    const { id } = useParams()
    // match url id and fakedb courses object to render UI
    const findMatch = courses.find(single => parseInt(id) === single.id);
    // destruture match course
    const { imgUrl, institute, title, rating, totalRate, lebel, price, description } = findMatch;
    return (

        <section className='container my-lg-5'>
        <div className='row'>
            {/* banner left part text */}

            <div className="col-md-6 text-center pe-50 t-70;">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"20px" }}> 
                   <img height={400} width={700} style={{ alignSelf: 'center' }}  src={imgUrl} alt="" />
</div>
            </div>



            <div className="col-md-6 d-flex align-items-center">
                <div>
                
                <h1 className='text-decoration-underline background-red text-center'>{title}</h1>
                <h6 className="text-center">Offer by: {institute}</h6>
                <p className='text-center'>Rating: {rating}</p>
                <p className='text-center'>Total Enrolled: {totalRate} Students</p>
                <h5 className='text-center'>Course Fee: INR {price}</h5>
                <p className='text-center'><strong>Level:Beginner</strong> {lebel}</p>
                <p>{description}</p>
                    
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>  
                    <button className='btn btn-outline-primary px-5 py-3 center'>Buy Now</button>
                </div>
                </div>
                
            </div>
            
            {/* banner right part images */}
            
        </div>
    </section>
 );
};

export default SingleCourse;