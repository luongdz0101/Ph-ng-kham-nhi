import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllSpecialty } from '../../../services/userServices';
import { withRouter } from 'react-router';
class Specialty extends Component {
    constructor(props){
        super(props);
        this.state = {

            dataSpecialty: []
        }
    }
  

    async componentDidMount(){
       
        let res = await getAllSpecialty();

      
        if(res && res.errCode === 0){
            this.setState({
                dataSpecialty: res.data
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        
    }


    handleViewDetailSpecialty = (specialty) => {
       
        
        this.props.history.push(`/detail-specialty/${specialty.id}`)

    }

    handleOnClickSpecialty = () => {
        this.props.history.push(`/header-specialty`)
    }

    
    render() {
           var settings_3 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 820,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 920,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
     
        let dataSpecialty = this.state.dataSpecialty;
        return (
           < React.Fragment>
                <div className="section-specialty">
                    <div className="grid wide ">
                        <div className="row center">
                            
                            <div className="col-8 header__title--body">
                                    <div className="specialty-header__title"><FormattedMessage id ="home-page.specialist"/></div>
                            </div>
                            <div className="col-4 header__button--body">
                                <button type="button" className="btn btn-info specialty-header__button" 
                                    
                                onClick={() => this.handleOnClickSpecialty()}
                                ><FormattedMessage id ="home-page.see-more"/></button>
                            </div>
                          
                        </div>
                    </div>
                    
                </div>
                <div className="grid wide ">
                    <Slider {...settings_3}>
                            
                        {dataSpecialty && dataSpecialty.length > 0 && dataSpecialty.map((item, index) => {          
                        return(
                            <div className="specialty-content__body">
                                <div className='specialty-content height-specialty' 
                                
                                onClick={() => this.handleViewDetailSpecialty(item)}
                                > 
                                    <div className="specialty-content__img img_specialty"
                                    style={{backgroundImage: `url(${item.image})`}}
                                    
                                    ></div>
                                    
                                    <span className='specialty-content__text'>{item.name}</span>
                                </div>
                            </div>
                        )


                        })}
                       
                    </Slider>
                </div>
                        
                 
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
 
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
