class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            date: '',
        };

        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
        console.log(this.state.phone)
    }

    handleChangeDate(event) {
        this.setState({date: event.target.value});
        console.log(this.state.date)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Отправленный номер: ' + this.state.phone);
        console.log('Отправленный дата: ' + this.state.date);
    }

    render() {
        return (
            <div className={'container w-50 mt-3'}>
                <h3 className={'section_name'}>Свяжитесь с нами</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="phone">Телефон</label>
                        <input required type="tel" className="form-control mt-1" id="phone"
                               aria-describedby="phoneHelp"
                               placeholder="89876543210" value={this.state.phone} onChange={this.handleChangePhone}/>
                        <small id="phoneHelp" className="form-text text-muted">Введите свой номер телефона</small>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="date">Дата и время</label>
                        <input required type="datetime-local" className="form-control mt-1" id="date"
                               aria-describedby="phoneHelp" value={this.state.date} onChange={this.handleChangeDate}/>
                        <small id="phoneHelp" className="form-text text-muted">Выберите удобные время и дату для
                            обратного звонка</small>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block mt-2 w-100"
                            aria-pressed="true">Отправить
                    </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <ContactForm/>
    , document.getElementById('contact_form'));