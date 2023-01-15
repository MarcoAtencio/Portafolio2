import { Title, ContainerContactMe, Input, TextArea, BtnSend } from './styles';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactMe = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_cxjbizq',
        'template_niagfti',
        event.target,
        'JDqDm8qZh2f65OC9F'
      )
      .then((response) => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'The message was sent successfully',
          showConfirmButton: false,
          color: '#5b5b5b ',
          timer: 2000,
          timerProgressBar: true,
          background: 'white',
          iconColor: '#08AD82',
        });
      });
  };

  return (
    <ContainerContactMe id='contactMe'>
      <Title>Contact Me</Title>
      <form className='container-fluid text-center' onSubmit={sendMessage}>
        <div className='row mt-3'>
          <Input
            type='text'
            placeholder='Name'
            className='col'
            name='user_name'
          />
          <Input
            type='email'
            placeholder='Email'
            className='col'
            name='user_email'
          />
        </div>

        <div className='row mt-3'>
          <Input type='text' placeholder='Subject' name='message_subject' />
        </div>
        <div className='row mt-3'>
          <TextArea
            placeholder='Message'
            className='col-12'
            name='message_content'
          />
        </div>

        <BtnSend type='submit' className='mt-4'>
          Send Messages
        </BtnSend>
      </form>
    </ContainerContactMe>
  );
};

export default ContactMe;
