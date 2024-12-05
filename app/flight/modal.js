import React from "react";

const modal = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="flight"
        role="tabpanel"
        aria-labelledby="flight-tab"
      >
        <form className="form-wrap">
          <select
            type="text"
            className="form-control"
            name="name"
            placeholder="From "
            onfocus="this.placeholder = ''"
          >
            <option>Abia State</option>
            <option>Abuja</option>
            <option>Adamawa State</option>
            <option>Akwa Ibom State</option>
            <option>Anambara State</option>
            <option>Bauchi State</option>
            <option>Bayelsa State</option>
            <option>Benue State</option>
            <option>Borno State</option>
            <option>Cross River State</option>
            <option>Delta State</option>
            <option>Edo State</option>
            <option>Ekiti State</option>
            <option>Enugu State</option>
            <option>Gombe State</option>
            <option>Imo State</option>
            <option>Jigawa State</option>
            <option>kaduna State</option>
            <option>Kastina State</option>
            <option>Kebi State</option>
            <option>Kwara State</option>
            <option>Lagos State</option>
            <option>Niger State</option>
            <option>Ogun State</option>
            <option>Ondo State</option>
            <option>Osun State</option>
            <option>Oyo State</option>
            <option>Plateu State</option>
            <option>Rivers State</option>
            <option>Sokoto State</option>
            <option>Taraba State</option>
            <option>Zamfara State</option>
          </select>
          <select
            type="text"
            className="form-control"
            name="to"
            placeholder="To "
            onfocus="this.placeholder = ''"
          >
            <option>Abia State</option>
            <option>Abuja</option>
            <option>Adamawa State</option>
            <option>Akwa Ibom State</option>
            <option>Anambara State</option>
            <option>Bauchi State</option>
            <option>Bayelsa State</option>
            <option>Benue State</option>
            <option>Borno State</option>
            <option>Cross River State</option>
            <option>Delta State</option>
            <option>Edo State</option>
            <option>Ekiti State</option>
            <option>Enugu State</option>
            <option>Gombe State</option>
            <option>Imo State</option>
            <option>Jigawa State</option>
            <option>kaduna State</option>
            <option>Kastina State</option>
            <option>Kebi State</option>
            <option>Kwara State</option>
            <option>Lagos State</option>
            <option>Niger State</option>
            <option>Ogun State</option>
            <option>Ondo State</option>
            <option>Osun State</option>
            <option>Oyo State</option>
            <option>Plateu State</option>
            <option>Rivers State</option>
            <option>Sokoto State</option>
            <option>Taraba State</option>
            <option>Zamfara State</option>
          </select>
          <input
            type="date"
            className="form-control date-picker"
            name="start"
            placeholder="Start "
            onfocus="this.placeholder = ''"
          />

          <input
            type="number"
            min="1"
            max="20"
            className="form-control"
            name="adults"
            placeholder="Adults "
            onfocus="this.placeholder = ''"
          />
          <input
            type="number"
            min="1"
            max="20"
            className="form-control"
            name="child"
            placeholder="Child "
            onfocus="this.placeholder = ''"
          />
          <Link href="/flight" className="primary-btn text-uppercase">
            Search flights
          </Link>
        </form>
      </div>
      <div
        className="tab-pane fade"
        id="hotel"
        role="tabpanel"
        aria-labelledby="hotel-tab"
      >
        <form className="form-wrap">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="From "
            onfocus="this.placeholder = ''"
          />
          <input
            type="text"
            className="form-control"
            name="to"
            placeholder="To "
            onfocus="this.placeholder = ''"
          />
          <input
            type="text"
            className="form-control date-picker"
            name="start"
            placeholder="Start "
            onfocus="this.placeholder = ''"
          />
          <input
            type="text"
            className="form-control date-picker"
            name="return"
            placeholder="Return "
            onfocus="this.placeholder = ''"
          />
          <input
            type="number"
            min="1"
            max="20"
            className="form-control"
            name="adults"
            placeholder="Adults "
            onfocus="this.placeholder = ''"
          />
          <input
            type="number"
            min="1"
            max="20"
            className="form-control"
            name="child"
            placeholder="Child "
            onfocus="this.placeholder = ''"
          />
          <a href="#" className="primary-btn text-uppercase">
            Search Hotels
          </a>
        </form>
      </div>
      <div
        className="tab-pane fade"
        id="holiday"
        role="tabpanel"
        aria-labelledby="holiday-tab"
      >
        <form className="form-wrap">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="From "
            onfocus="this.placeholder = ''"
          />
          <input
            type="text"
            className="form-control"
            name="to"
            placeholder="To "
            onfocus="this.placeholder = ''"
          />
          <input
            type="text"
            className="form-control date-picker"
            name="start"
            placeholder="Start "
            onfocus="this.placeholder = ''"
          />
          <input
            type="text"
            className="form-control date-picker"
            name="return"
            placeholder="Return "
            onfocus="this.placeholder = ''"
          />
          <input
            type="number"
            min="1"
            max="20"
            className="form-control"
            name="adults"
            placeholder="Adults "
            onfocus="this.placeholder = ''"
          />
          <input
            type="number"
            min="1"
            max="20"
            className="form-control"
            name="child"
            placeholder="Child "
            onfocus="this.placeholder = ''"
          />
          <a href="#" className="primary-btn text-uppercase">
            Search Holidays
          </a>
        </form>
      </div>
    </div>
  );
};

export default modal;
