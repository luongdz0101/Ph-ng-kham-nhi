import React, { useState, useEffect  } from 'react';
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import './PatientAsked.scss'
import Slider from '../../../components/Slider/SliderBG';
import InputForm from '../../../components/InputFrom/InputForm';
import { createNewQuestion } from '../../../services/userServices';
import { toast } from 'react-toastify';
import {  CommonUtils } from '../../../utils';
import { FormattedMessage } from 'react-intl';



const PatientAsked = (props) => {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState('');
    const [previewImgURL, setPreviewImgURL] = useState('');
    const [imageBase64, setImageBase64] = useState('');
    const [isOpen, setIsOpen] = useState(false);

 

    const handleChange = value => {
        setInputs(prevState => ({ ...prevState, [value.name] : value.value }));
    }
const getDataPatientQuestion = async () => {
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email || !emailPattern.test(inputs.email)) {
        toast.error('Vui lòng nhập địa chỉ email hợp lệ!');
        return;
    }

    
    const phoneNumberPattern = /^[0-9]{10,11}$/;
    if (!inputs.phoneNumber || !phoneNumberPattern.test(inputs.phoneNumber)) {
        toast.error('Vui lòng nhập số điện thoại hợp lệ!');
        return;
    }

  
    if (!inputs.name) {
        toast.error('Vui lòng nhập họ tên!');
        return;
    }

    
    if (!inputs.address) {
        toast.error('Vui lòng nhập địa chỉ!');
        return;
    }

   
    if (!textarea) {
        toast.error('Vui lòng nhập câu hỏi!');
        return;
    }


    let res = await createNewQuestion({
        email: inputs.email,
        fullName: inputs.name,
        address: inputs.address,
        phoneNumber: inputs.phoneNumber,
        question: textarea,
        image: imageBase64
    });

    if (res && res.errCode === 0) {
        toast.success('Gửi câu hỏi thành công');
        setInputs({
            email: '',
            fullName: '',
            address: '',
            phoneNumber: '',
        });
        setTextarea('');
        setPreviewImgURL('');
        setImageBase64('');
    } else {
        toast.error('Gửi câu hỏi thất bại');
    }
};

    const  handleOnChangeImg = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file){
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);

            setPreviewImgURL(objectUrl);
            setImageBase64(base64);
        }
        
        
    }

    const openImg = () => {
       
        if(!setPreviewImgURL){
            return
        }
        setIsOpen(true)
    }




    const handleSaveData = () => {
        getDataPatientQuestion()
    }
    return(
        <React.Fragment>
            <HomeHeader />
            <div className="grid wide">
                <div className="row t">
                    <div className="col l-12">
                        <Slider />
                    </div>

                    <div className="container">
                        <div className="row body-asked">
                            <div className="col-6 form-group">
                                <label htmlFor=""><FormattedMessage id ="manage-user.name"/></label>
                                    <InputForm 
                                        name= 'name'
                                        placeholder='Nhập họ tên'
                                        type="text"
                                        handleOnChange={handleChange}
                                        className="form-control"
                                        value={inputs.name || ''}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label htmlFor=""><FormattedMessage id ="manage-user.phone-number"/></label>
                                    <InputForm 
                                        name= 'phoneNumber'
                                        placeholder='+84....'
                                        type="text"
                                        handleOnChange={handleChange}
                                        className="form-control"
                                        value={inputs.phoneNumber || ''}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label htmlFor=""><FormattedMessage id ="manage-user.email"/></label>
                                    <InputForm 
                                        name= 'email'
                                        placeholder='email@gmail.com'
                                        type="text"
                                        handleOnChange={handleChange}
                                        className="form-control"
                                        value={inputs.email || ''}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label htmlFor=""><FormattedMessage id ="manage-user.address"/></label>
                                    <InputForm 
                                        name= 'address'
                                        placeholder='Tên thành phố của bạn'
                                        type="text"
                                        handleOnChange={handleChange}
                                        className="form-control"
                                        value={inputs.address || ''}
                                />
                            </div>
                            <div className="col-12 form-group">
                                <label htmlFor=""><FormattedMessage id ="manage-user.question"/></label>
                                     <textarea className="form-control textarea-body" rows="6"
                                            onChange={ (e) => setTextarea(e.target.value)}
                                            name='asked'
                                            placeholder='Tội bị đau...'
                                            value={textarea || ''}
                                        >

                                    </textarea>
                            </div>

                            <div className="col-2">
                                <div className="img-body">
                                    <div className='label-upload'>
                                        <input id="preview-img" type="file" className='file-control' hidden
                                            onChange={(event) => handleOnChangeImg(event)}

                                        />
                                        <label htmlFor="preview-img" className='preview-img'>
                                            <span className='taianh'> <FormattedMessage id ="manage-user.download-image"/></span>
                                            <i className="fas fa-upload"></i> 
                                        </label>

                                        <div className="preview-imagee"
                                            style={{backgroundImage: `url(${previewImgURL})`}}
                                            onClick={ openImg}
                                        > 

                                        </div>
                                </div>
                                </div>
                                
                            </div>

                            <div className="col-10">
                                <button type="button" className="btn btn-modal__one btn-primary "
                                    onClick={handleSaveData}
                                ><FormattedMessage id ="manage-user.gch"/></button>
                            </div>

                            
                        </div>
                    </div>

                    
                </div>
            </div>
            
                   
             
            <HomeFooter/>
          
        </React.Fragment>
    )
    
}



export default (PatientAsked);
