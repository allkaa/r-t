// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'

class App extends Component {

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('App constructor initial props')
    console.log(props)

    console.log('App constructor this.state before settings test data')
    console.log(this.state)
    this.state = {characters: [
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
    ]}
    console.log('App constructor this.state after settings test data')
    console.log(this.state)
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    return (
      <div className="container">
        {/*<Table characterData={this.state.characters} />*/}
        <header>
          <h1>St Huxley's Community College</h1>
        </header>
        <section>
          <h2>Brave new world</h2>
          <p>It's a brave new world out there. Our children are being put in increasing more competitive situations, both during recreation, and as they start to move into the adult world of <a href="https://en.wikipedia.org/wiki/Examination">examinations</a>, <a href="https://en.wikipedia.org/wiki/Jobs">jobs</a>, <a href="https://en.wikipedia.org/wiki/Career">careers</a>, and other life choices. Having the wrong mindset, becoming <a href="https://en.wikipedia.org/wiki/Emotion">too emotional</a>, or making the wrong choices can contribute to them experiencing difficulty in taking their rightful place in today's ideal society.</p>
          <p>As concerned parents, guardians or carers, you will no doubt want to give your children the best possible start in life — and you've come to the right place.</p>
          <h2>The best start in life</h2>
          <p>At St. Huxley's, we pride ourselves in not only giving our students a top quality education, but also giving them the societal and emotional intelligence they need to win big in the coming utopia. We not only excel at subjects such as genetics, data mining, and chemistry, but we also include compulsory lessons in:</p>
          <ul>
            <li>Emotional control</li>
            <li>Judgement</li>
            <li>Assertion</li>
            <li>Focus and resolve</li>
          </ul>
          <p>If you are interested, then you next steps will likely be to:</p>
          <ol>
            <li><a href="#1">Call us</a> for more information</li>
            <li><a href="#2">Ask for a brochure</a>, which includes signup form</li>
            <li><a href="#3">Book a visit</a>!</li>
          </ol>
        </section>
        <aside>
          <h2>Top course choices</h2>
          <ul>
            <li><a href="#4">Genetic engineering</a></li>
            <li><a href="#5">Genetic mutation</a></li>
            <li><a href="#6">Organic Chemistry</a></li>
            <li><a href="#7">Pharmaceuticals</a></li>
            <li><a href="#8">Biochemistry with behaviour</a></li>
            <li><a href="#9">Pure biochemistry</a></li>
            <li><a href="#10">Data mining</a></li>
            <li><a href="#11">Computer security</a></li>
            <li><a href="#12">Bioinformatics</a></li>
            <li><a href="#13">Cybernetics</a></li>
          </ul>
          <p><a href="#999">See more</a></p>
        </aside>
        <nav>
          <ul>
            <li><a href="#100">Home</a></li>
            <li><a href="#101">Finding us</a></li>
            <li><a href="#102">Courses</a></li>
            <li><a href="#103">Staff</a></li>
            <li><a href="#104">Media</a></li>
            <li><a href="#105">Prospectus</a></li>
          </ul>
        </nav>
        <footer>
          <address>
            {`Written by `}<a href="mailto:webmaster@example.com">Jon Doe</a>.<br/>  
            {`Visit us at:`}<br/>
            {`Example.com`}<br/>
            {`Box 564, Disneyland`}<br/>
            {`USA`}
            </address>
          <p>&copy; 2016 St Huxley's Community College</p>
        </footer>
      </div>
    )
  }
}

export default App