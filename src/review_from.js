class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            sended: false,
            rating: '1'
        };
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendAgain = this.sendAgain.bind(this);
    }

    sendAgain() {
        this.setState({sended: false});
    }

    onChangeRating(event) {
        this.setState({rating: event.target.value})
    }

    onChangeReview(event) {
        this.setState({text: event.target.value})
    }

    handleSubmit(event) {
        this.setState({sended: true, text: '', rating: '1'});
        console.log('Отправленный отзыв: ' + this.state.text);
        console.log('Отправленный рейтинг: ' + this.state.rating);
        event.preventDefault();
    }

    render() {
        let radios = [];
        for (let i = 1; i < 6; i++) {
            radios.push(
                <div key={"rating" + i.toString()} id={"rating" + i.toString()} className={'form-check'}>
                    <input id={"rating" + i.toString()} className={"form-check-input"} type="radio" value={i.toString()}
                           name={'rating'}
                           checked={this.state.rating === i.toString()}
                           onChange={this.onChangeRating}/>
                    <label id={"rating" + i.toString()} className={"form-check-label"}
                           htmlFor={'rating' + i.toString()}>{i.toString()}</label>
                </div>
            )
        }
        return (
            <div className={'container w-100'}>
                <h3 className='section_name'>Оставьте отзыв</h3>
                <form onSubmit={this.handleSubmit}>
                    {radios}
                    <div className={'form-group'}>
                        <textarea required className="form-control mt-2" id="review"
                                  aria-describedby="reviewHelp"
                                  placeholder="Отзыв..." value={this.state.text} onChange={this.onChangeReview}/>
                        <small id="reviewHelp" className="form-text text-muted">Напишите ваше мнение.</small>
                    </div>
                    {this.state.sended ? <div/> :
                        <button type="submit" className="btn btn-secondary btn-block mt-2 w-100"
                                aria-pressed="true">Отправить
                        </button>}
                </form>
                {this.state.sended ?
                    <div><p className={'mt-3 text-success'}>Спасибо!</p>
                        <button onClick={this.sendAgain} className={'btn btn-secondary w-100'}>Еще один отзыв
                        </button>
                    </div>
                    : <p/>}
            </div>
        )
    }
}

ReactDOM.render(
    <ReviewForm/>
    , document.getElementById('test'));