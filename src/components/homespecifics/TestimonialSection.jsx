import React from 'react'
import Cassandra_image from '@images/Cassandra.png'
import Amanda_image from '@images/Amanda.png'
import Jack_image from '@images/Jack.png'
import Button from '@generics/Button'
import ReviewBox from '@generics/ReviewBox'

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
        <div className="container">
            <p className="orange-p">Testimonial</p>
            <h2>What Our Clients Says</h2>
            <div className="reviews">
                
                <ReviewBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" 
                img={Cassandra_image} alt="Portrait of a smiling woman in a forest background" name="Cassandra Warren" title="Business Manager, Dorfus" />

                <ReviewBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" 
                img={Amanda_image} alt="Portrait of a smiling woman in an office setting, leaning on a chair" name="Amanda Tulling" title="Senior Developer, Square" />

                <ReviewBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" 
                img={Jack_image} alt="Portrait of a smiling man with a gray background" name="Jack McDogglas" title="Key Account Manager, Gobona" />
  
            </div>
            <div className="center-content">
                <Button color="btn-black" text="All Reviews" url="#" />
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection