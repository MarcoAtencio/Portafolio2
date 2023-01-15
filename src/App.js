import { Side, HamburgerMenu } from './sections/menu';
import Presentation from './sections/content/presentation';
import Skills from './sections/content/skills';
import Work from './sections/content/work';
import Education from './sections/content/education';
import ContactMe from './sections/content/contactMe';
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  return (
    <div className='container-fluid'>
      {useWindowDimensions() === 'tablet' ? (
        <>
          <HamburgerMenu />
          <div className='row'>
            <Presentation />
            <Skills />
            <Work />
            <Education />
            <ContactMe />
          </div>
        </>
      ) : (
        <div className='row'>
          <Side />
          <div className='col-9   col-xl-10 offset-3 offset-xl-2'>
            <Presentation />
            <Skills />
            <Work />
            <Education />
            <ContactMe />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
