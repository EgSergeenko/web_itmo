var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewForm = function (_React$Component) {
    _inherits(ReviewForm, _React$Component);

    function ReviewForm(props) {
        _classCallCheck(this, ReviewForm);

        var _this = _possibleConstructorReturn(this, (ReviewForm.__proto__ || Object.getPrototypeOf(ReviewForm)).call(this, props));

        _this.state = {
            text: '',
            sended: false,
            rating: '1'
        };
        _this.onChangeRating = _this.onChangeRating.bind(_this);
        _this.onChangeReview = _this.onChangeReview.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.sendAgain = _this.sendAgain.bind(_this);
        return _this;
    }

    _createClass(ReviewForm, [{
        key: 'sendAgain',
        value: function sendAgain() {
            this.setState({ sended: false });
        }
    }, {
        key: 'onChangeRating',
        value: function onChangeRating(event) {
            this.setState({ rating: event.target.value });
        }
    }, {
        key: 'onChangeReview',
        value: function onChangeReview(event) {
            this.setState({ text: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            this.setState({ sended: true, text: '', rating: '1' });
            console.log('Отправленный отзыв: ' + this.state.text);
            console.log('Отправленный рейтинг: ' + this.state.rating);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var radios = [];
            for (var i = 1; i < 6; i++) {
                radios.push(React.createElement(
                    'div',
                    { id: "rating" + i.toString(), className: 'form-check' },
                    React.createElement('input', { id: "rating" + i.toString(), className: "form-check-input", type: 'radio', value: i.toString(),
                        name: 'rating',
                        checked: this.state.rating === i.toString(),
                        onChange: this.onChangeRating }),
                    React.createElement(
                        'label',
                        { id: "rating" + i.toString(), className: "form-check-label",
                            htmlFor: 'rating' + i.toString() },
                        i.toString()
                    )
                ));
            }
            return React.createElement(
                'div',
                { className: 'container w-100' },
                React.createElement(
                    'h3',
                    { className: 'section_name' },
                    '\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    radios,
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement('textarea', { required: true, className: 'form-control mt-2', id: 'review',
                            'aria-describedby': 'reviewHelp',
                            placeholder: '\u041E\u0442\u0437\u044B\u0432...', value: this.state.text, onChange: this.onChangeReview }),
                        React.createElement(
                            'small',
                            { id: 'reviewHelp', className: 'form-text text-muted' },
                            '\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u043C\u043D\u0435\u043D\u0438\u0435.'
                        )
                    ),
                    this.state.sended ? React.createElement('div', null) : React.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-secondary btn-block mt-2 w-100',
                            'aria-pressed': 'true' },
                        '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C'
                    )
                ),
                this.state.sended ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        { className: 'mt-3 text-success' },
                        '\u0421\u043F\u0430\u0441\u0438\u0431\u043E!'
                    ),
                    React.createElement(
                        'button',
                        { onClick: this.sendAgain, className: 'btn btn-secondary w-100' },
                        '\u0415\u0449\u0435 \u043E\u0434\u0438\u043D \u043E\u0442\u0437\u044B\u0432'
                    )
                ) : React.createElement('p', null)
            );
        }
    }]);

    return ReviewForm;
}(React.Component);

ReactDOM.render(React.createElement(ReviewForm, null), document.getElementById('test'));