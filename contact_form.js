var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
    _inherits(ContactForm, _React$Component);

    function ContactForm(props) {
        _classCallCheck(this, ContactForm);

        var _this = _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));

        _this.state = {
            phone: '',
            date: ''
        };

        _this.handleChangePhone = _this.handleChangePhone.bind(_this);
        _this.handleChangeDate = _this.handleChangeDate.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);

        return _this;
    }

    _createClass(ContactForm, [{
        key: 'handleChangePhone',
        value: function handleChangePhone(event) {
            this.setState({ phone: event.target.value });
            console.log(this.state.phone);
        }
    }, {
        key: 'handleChangeDate',
        value: function handleChangeDate(event) {
            this.setState({ date: event.target.value });
            console.log(this.state.date);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            console.log('Отправленный номер: ' + this.state.phone);
            console.log('Отправленный дата: ' + this.state.date);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container w-50 mt-3' },
                React.createElement(
                    'h3',
                    { className: 'section_name' },
                    '\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        'div',
                        { className: 'form-group mt-2' },
                        React.createElement(
                            'label',
                            { htmlFor: 'phone' },
                            '\u0422\u0435\u043B\u0435\u0444\u043E\u043D'
                        ),
                        React.createElement('input', { required: true, type: 'tel', className: 'form-control mt-1', id: 'phone',
                            'aria-describedby': 'phoneHelp',
                            placeholder: '89876543210', value: this.state.phone, onChange: this.handleChangePhone }),
                        React.createElement(
                            'small',
                            { id: 'phoneHelp', className: 'form-text text-muted' },
                            '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group mt-2' },
                        React.createElement(
                            'label',
                            { htmlFor: 'date' },
                            '\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F'
                        ),
                        React.createElement('input', { required: true, type: 'datetime-local', className: 'form-control mt-1', id: 'date',
                            'aria-describedby': 'phoneHelp', value: this.state.date, onChange: this.handleChangeDate }),
                        React.createElement(
                            'small',
                            { id: 'phoneHelp', className: 'form-text text-muted' },
                            '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u044F \u0438 \u0434\u0430\u0442\u0443 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0437\u0432\u043E\u043D\u043A\u0430'
                        )
                    ),
                    React.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-secondary btn-block mt-2 w-100',
                            'aria-pressed': 'true' },
                        '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C'
                    )
                )
            );
        }
    }]);

    return ContactForm;
}(React.Component);

ReactDOM.render(React.createElement(ContactForm, null), document.getElementById('contact_form'));