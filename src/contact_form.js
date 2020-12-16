class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            date: '',
            sended: false,
        };

        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendAgain = this.sendAgain.bind(this);

    }

    sendAgain() {
        this.setState({sended: false});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    handleChangeDate(event) {
        this.setState({date: event.target.value});
    }

    handleSubmit(event) {
        this.setState({sended: true, date: '', phone: ''});
        console.log('Отправленный номер: ' + this.state.phone);
        console.log('Отправленный дата: ' + this.state.date);
        event.preventDefault();
    }

    render() {
        return (
            <div className={'container w-100 mt-3'}>
                <h3 className={'section_name'}>Свяжитесь с нами</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="phone">Телефон</label>
                        <input required type="tel" className="form-control mt-1" id="phone"
                               aria-describedby="phoneHelp"
                               placeholder="89876543210" value={this.state.phone} onChange={this.handleChangePhone}/>
                        <small id="phoneHelp" className="form-text text-muted">Введите свой номер телефона.</small>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="date">Дата и время</label>
                        <input required type="datetime-local" className="form-control mt-1" id="date"
                               aria-describedby="phoneHelp" value={this.state.date} onChange={this.handleChangeDate}/>
                        <small id="phoneHelp" className="form-text text-muted">Выберите удобную дату для
                            обратного звонка.</small>
                    </div>
                    {this.state.sended ? <div/> :
                        <button type="submit" className="btn btn-secondary btn-block mt-2 w-100"
                                aria-pressed="true">Отправить
                        </button>}
                </form>
                {this.state.sended ?
                    <div><p className={'mt-3 text-success'}>Мы скоро свяжемся с Вами.</p>
                        <button onClick={this.sendAgain} className={'btn btn-secondary w-100'}>Записать еще один ответ
                        </button>
                    </div>
                    : <p/>}
            </div>
        );
    }
}

ReactDOM.render(
    <ContactForm/>
    , document.getElementById('contact_form'));

