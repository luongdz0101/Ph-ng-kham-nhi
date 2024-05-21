import React, { useState, useEffect  } from 'react';
import { getQuestion, sendQuestion, deleteQuestion } from '../../../services/userServices';
import RemedyModal from '../../Patient/Doctor/modal/RemedyModal';

import {  toast } from 'react-toastify';

const TableQA = (props) => {
    const [dataQuestion, setDataQuestion] = useState({});
    const[isOpenRemedy, setIsOpenRemedy] = useState(false);
    const [dataModal, setDateModal] = useState([]);
    const [isReply, setIsReply] = useState(true);
    const [isImg, setIsImg] = useState(false);
    const [questionId, setQuestionId] = useState(false);


    useEffect( async() => {
        
        getDataQuestion()

       
    }, [])
    

    const getDataQuestion = async() => {
        let res = await getQuestion ({
        })

        if(res && res.errCode === 0){
            setDataQuestion(res.data);
         }else{
            setDataQuestion('')
        }
    }

    const deleteQA  = async (item) => {
        let deleteQA = item.id;
        
        let res = await deleteQuestion({
            id: deleteQA
        });
        if(res && res.errCode === 0){
            await getDataQuestion();
            toast.success('Xoá câu hỏi thành công');
           
           
        }else{
            toast.error('Xoá câu hỏi chuyên khoa thất bại')
        }
    }

    const handleQA  = (item) => {
        
        let data = {
           
            email: item.email,
            question: item.question,
            fullName: item.fullName,
            phoneNumber: item.phoneNumber,
            image: item.image
        }
        
        setDateModal(data);
        setIsOpenRemedy(true);
    }
     
    
    const sendEmail = async(dataReply, img) => {
        
      
        let res = await sendQuestion({
            email: dataModal.email,
            question: dataModal.question,
            reply: dataReply,
            fullName: dataModal.fullName,
            image: img
        })

        if(res && res.errCode == 0){
            setIsOpenRemedy(false)
            toast.success('Gửi câu trả lời thành công')
            getDataQuestion();
           
            
        }else{
            setIsOpenRemedy(false)
            toast.error('Gửi câu trả lời thất bại')
        }
       
    }
     const closeModal = () => {
        setIsOpenRemedy(false)
    }

    return(
        <React.Fragment>
               <div className='question-table'>
                   <table className="table table-dark">
                       <thead>
                           <tr>
                           <th scope="col">#</th>
                           <th scope="col">Email</th>
                           <th scope="col">Question</th>
                           <th scope="col">Actions</th>
                           </tr>
                       </thead>
                       <tbody>

                           <>
                         
                           { dataQuestion && dataQuestion .length > 0 && dataQuestion.map((item, index) => {
                               return(
                                   <tr>
                                       <th scope="row">{index + 1}</th>
                                       <td>{item.email}</td>
                                       <td>{item.question}</td>
                                       <td>    
                                        
                                         
                                                <button type="button" 
                                                className="btn mr-2 btn-success" 
                                                onClick={() => {
                                                    handleQA(item);
                                                }}

                                              
                                                >Gửi và Thêm</button>
                                        
                                                 <button type="button" 
                                                className="btn   btn-danger" 
                                                onClick={() => {
                                                    deleteQA(item);
                                                }}

                                              
                                                >Xoá</button>
                                        
                                    
                                       
                        
                                       </td>
                                       
                                       
                                               
                                   </tr>     
                               )
                           })}
                                       
                           </>
    
                 
                       </tbody>
                   </table>


               </div>

               {
                isOpenRemedy === true &&
                <RemedyModal 
                    isOpenModal = {isOpenRemedy}
                    dataModal = {dataModal}
                    closeModal= {closeModal}
                    // sendRemedy = {this.sendRemedy}
                    sendEmail = {sendEmail}
                    isReply = {isReply}
                    isImg = {isImg}
                    isEmail = {true}
                />
            }
          
        </React.Fragment>
    )
    
}



export default (TableQA);
