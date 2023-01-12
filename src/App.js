import Side from './sections/side';
import Presentation from './sections/content/presentation';
import Skills from './sections/content/skills';
import Work from './sections/content/work';
import Education from './sections/content/education';
import ContactMe from './sections/content/contactMe';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Side />
        <div className='col-10 offset-2'>
          <Presentation />
          <Skills />
          <Work />
          <Education />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
