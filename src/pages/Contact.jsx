const Contact = () => {
    return (
        <>
        
        <div className="search-panel d-none" id="searchPanel">
      <div className="search-panel-inner p-4">
        <div className="seach-panel-close">
          <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
            <svg className="svg-icon text-white mt-1">
              <use href="#close-1"> </use>
            </svg>
          </button>
        </div>
        <form className="w-100" action="#">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="d-flex align-items-center mb-3 border-bottom">
                <input className="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
                <button className="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i className="fas fa-search"></i></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Contact</h1>
          </div>
          <div className="col-lg-3 text-end order-1 order-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container py-5">
        <header className="mb-5 pb-4">
          <p className="lead">
            Are you curious about something? Do you have some kind of problem with our products? As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am
            he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
          </p>
        </header>
        <div className="row">
          <div className="col-md-4">
            <svg className="svg-icon mb-4 text-primary svg-icon-big svg-icon-light">
              <use href="#map-marker-1"> </use>
            </svg>
            <h3>Address</h3>
            <p>18th Floor,<br />W Fifth, 5th Avenue,<br/>Taguig, 1630 <strong>Metro Manila</strong></p>
          </div>
          <div className="col-md-4">
            <svg className="svg-icon mb-4 text-primary svg-icon-big svg-icon-light">
              <use href="#helpline-24h-1"> </use>
            </svg>
            <h3>Call center</h3>
            <p>This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of communication.</p>
            <p><strong>020-800-456-747</strong></p>
          </div>
          <div className="col-md-4">
            <svg className="svg-icon mb-4 text-primary svg-icon-big svg-icon-light">
              <use href="#envelope-1"> </use>
            </svg>
            <h3>Electronic support</h3>
            <p>Please feel free to write an email to us or to use our electronic ticketing system.</p>
            <ul className="list-style-none">
              <li><strong className="fw-bold"><a href="mailto:">info@gmail.com</a></strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div id="map">                                       </div>
    <section className="py-5">
      <div className="container py-5">
        <header className="mb-5">
          <h2>Contact form</h2>
        </header>
        <div className="row">
          <div className="col-md-7">
            <form className="custom-form form" id="contact-form" method="post" action="contact.php">
              <div className="row gy-3">
                <div className="col-sm-6">
                  <label className="form-label" for="name">Your firstname *</label>
                  <input className="form-control" type="text" name="name" id="name" placeholder="Enter your firstname" required="required" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" for="surname">Your lastname *</label>
                  <input className="form-control" type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required" />
                </div>
                <div className="col-sm-12">
                  <label className="form-label" for="email">Your email *</label>
                  <input className="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required" />
                </div>
                <div className="col-sm-12">
                  <label className="form-label" for="message">Your message for us *</label>
                  <textarea className="rounded form-control" rows="4" name="message" id="message" placeholder="Enter your message" required="required"></textarea>
                </div>
                <div className="col-sm-12">
                  <button className="btn btn-primary" type="submit">Send message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
            <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
            <ul className="list-inline">
              <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#" target="_blank"><i className="fab fa-behance"></i></a></li>
              <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#" target="_blank"><i className="fab fa-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

        
        </>
    );
}

export default Contact;