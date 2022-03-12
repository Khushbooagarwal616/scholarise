
import './App.css';

function App() {
  return (
    <div className="App bg-light">
      <div className="col-12">
        <div className="row  fullbody ">
          <div className="col-2 p-0  bar">
            <div className=" p-4 text-white side-bar">
              <a href="" className="d-flex text-white text-decoration-none text1">
                SCHOLARISE
              </a>
              <ul className="flex-column mb-auto listitems">
                <li className="text2">
                  <a className=" btn " href="" >
                    Dashboard
                  </a>
                </li>
                <li className="text2">
                  <a className=" btn " href="" >
                    Calendar
                  </a>
                </li>
                <li className="text2">
                  <a className=" btn " href="" >
                    Inbox
                  </a>
                </li>
                <li className="text2">
                  <a className=" btn " href="" >
                    Report Card
                  </a>
                </li>
                <li className="text2">
                  <a className=" btn " href="" >
                    Payments
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-10">
            <div className="row bg-white col-body">
              <form class="d-flex py-3 ps-5 searchbar">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div className="row bg-white 6elements">

              <div className="d-flex align-items-center ps-5 border-bottom">
                <nav >
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <div className="firstelement d-flex">
                      <button class="nav-link active " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All updates
                      </button>
                      <span class="five ms-2">   5</span>
                    </div>
                    <div className="secondelement ms-2 d-flex">
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Attendance </button>
                      <span className="five ms-2"> 3</span>
                    </div>
                    <div className="thiredelement ms-2 d-flex">
                      <button class="nav-link " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Grades</button>
                    </div>
                    <div className="fourthelement ms-2 d-flex">
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Surveys </button>
                    </div>
                    <div className="fifthelement ms-2 d-flex">
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Permission slips </button>
                      <span className="five ms-2"> 2</span>
                    </div>
                    <div className="sixthlement ms-2 d-flex">
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Announcements </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="row 2dropdown">
              <div className="d-flex droprow ps-5">
                <div className="firstdropdown bg-white me-3">
                  <div class="dropdown this">
                    <a class="btn dropd py-1 px-3 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      This Semester
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className="seconddropdown bg-white">
                  <div class="dropdown all">
                    <a class="btn dropd py-1 px-3  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      All students
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ps-5 d-flex rowcol ">
              <div class=" col-5 column1 bg-white ps-4">
                <div className="row ps-4 attend">
                  <h5 class="heading5attend"> Attendance</h5>
                </div>
                <div className="text d-flex">
                  <div className="ps-4 headpera">
                    <h6 className="heading6ch"> 03101 Chemistry </h6>
                    <p className="pera1">03-24-2021 . 8:30am - 9:15am</p>
                  </div>
                  <div className=" ps-4 d-flex ms-auto buttondrop">
                    <a className="btn buttona btn-danger" role="button" href=""> Absent </a>
                    <div class="dropdown dropdown1">
                      <div class="btn-group  dropend1 dropend">
                        <a class="btn dropdown-toggle dropblack" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text d-flex">
                  <div className="ps-4 headpera">
                    <h6 className="heading6ch"> 04051 World History </h6>
                    <p className="pera1">03-24-2021 . 8:30am - 9:15am</p>
                  </div>
                  <div className=" ps-4 d-flex ms-auto buttondrop">
                    <a className="btn buttona btn-danger" role="button" href=""> Absent </a>
                    <div class="dropdown dropdown1">
                      <div class="btn-group  dropend1 dropend">
                        <a class="btn dropdown-toggle dropblack" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text d-flex">
                  <div className="ps-4 headpera">
                    <h6 className="heading6ch"> 03151 Physics </h6>
                    <p className="pera1">03-24-2021 . 8:30am - 9:15am</p>
                  </div>
                  <div className=" ps-4 d-flex ms-auto buttondrop">
                    <a className="btn buttona btn-danger" role="button" href=""> Absent </a>
                    <div class="dropdown dropdown1">
                      <div class="btn-group  dropend1 dropend">
                        <a class="btn dropdown-toggle dropblack" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row see justify-content-center">
                  <a className="btn seebutton btn-secondary" role="button" href=""> See all grades </a>
                </div>

              </div>

              <div class=" col-5 column1 column2 bg-white ps-2 ms-4">
                <div className="row ps-4 grades">
                  <h5 class="heading5attend"> Grades</h5>
                </div>
                <div className="text d-flex">
                  <div className="ps-4 headpera">
                    <h6 className="heading6ch"> Microbial classification </h6>
                    <p className="pera1">03052 Biology-Advance studies</p>
                  </div>
                </div>
                <div className="text d-flex">
                  <div className="ps-4 headpera">
                    <h6 className="heading6ch"> Microbial classification </h6>
                    <p className="pera1">03052 Biology-Advance studies</p>
                  </div>
                </div>
                <div class="row see justify-content-center">
                  <a className="btn seebutton btn-secondary" role="button" href=""> See all grades </a>
                </div>
              </div>
            </div>
            <div className="row ps-5 d-flex rowcol ">
              <div class=" col-5 column1 bg-white ps-4">
                <div className="row ps-4 surveys">
                  <h5 class="heading5attend"> Surveys</h5>
                </div>
                <div class="row twopera">
                  <p className="twopera1"> You don't have any surveys </p>
                  <p className="twopera2"> Your surveys will apper here</p>
                </div>
              </div>
              <div class=" col-5 column1 bg-white ps-2 ms-4">
                <div className="row ps-4 surveys">
                  <h5 class="heading5attend"> Permission Slips</h5>
                </div>
                <div className="text d-flex">
                  <div className="ps-4 headpera">
                    <h6 className="heading6ch"> Field Trip Permission Slip </h6>
                    <p className="pera1">Today . 8:00am - 8:45am</p>
                  </div>
                </div>
                <div class="row see justify-content-center">
                <a className="btn seebutton btn-secondary" role="button" href=""> See all grades </a>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
