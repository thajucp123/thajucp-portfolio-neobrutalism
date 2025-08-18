import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './components/ui/hover-card' //This is from NeoBrutalism.dev

function PreviousSite() {
  return (
    <section className="previous-version">
     <svg
    className="pin-dot"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="6" fill="#000" />
  </svg>
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg> Check out the previous version of this site</h2>
      <div className='previous-version-container'>
        <div className="previous-version-text">
          <p>This site was previously built with a <HoverCard>
  <HoverCardTrigger asChild>
    <span>Coding Wizard</span>
  </HoverCardTrigger>
  <HoverCardContent className='bg-[#FF5E5B] border border-black rounded p-2'>
  <div className='wizardry-description' style={{ color: 'black', padding: '2rem' }}>
  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', backgroundColor: 'var(--blue)', padding: '0.25rem 0.25rem', borderRadius: '0.25rem', textDecoration: 'none' }}>🤭</span>
  <br/>
  <p>It was a fun experiment where I went with a complete UI theme based on wizardry and magic in the coding realm. </p>
    It was all about making coding feel like a magical journey! 
    <br/>A bit cringe, but <em>cool</em> !
    </div>
  </HoverCardContent>
</HoverCard>
&nbsp; theme. <br/> You can view the old version here: <a href="https://wizardry.thajucp.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>wizardry.thajucp.in</a>.</p>
        </div>
        <div className="previous-version-image">
          <img src="https://github.com/thajucp123/personal-portfolio/raw/main/src/assets/img/screenshots/main-screenshot-1.jpg" alt="Previous Version" />
        </div>
        </div>
      </section>
  );
}

export default PreviousSite
