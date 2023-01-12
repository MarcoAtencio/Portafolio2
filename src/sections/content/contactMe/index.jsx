import { Title, ContainerContactMe, Input, TextArea, BtnSend } from './styles';

const ContactMe = () => (
  <ContainerContactMe id='contactMe'>
    <Title>Contact Me</Title>
    <form className='container-fluid text-center'>
      <div className='row mt-3'>
        <Input type='text' placeholder='Name' className='col' />
        <Input type='email' placeholder='Email' className='col' />
      </div>

      <div className='row mt-3'>
        <Input type='text' placeholder='Subject' />
      </div>
      <div className='row mt-3'>
        <TextArea placeholder='Message' className='col-12' />
      </div>

      <BtnSend type='submit' className='mt-4'>
        Send Messages
      </BtnSend>
    </form>
  </ContainerContactMe>
);

export default ContactMe;
