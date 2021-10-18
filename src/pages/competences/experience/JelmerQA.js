import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Quote from '../../../components/Quote';

const quoteText = 'The important thing is not to stop questioning. Curiosity has its own reason for existence.';
const quoteAuthor = 'Albert Einstein - Death of a Genius–Old Man’s Advice to Youth: ‘Never Lose a Holy Curiosity,’’ Life Magazine 38, no. 18, (May 2, 1955): p. 64';

const formsSpacing = '20px';
const apiRegisterUrl = 'https://jelmerqa-backend.herokuapp.com/register-question';

const InputField = withStyles({
    root: {
        '& .MuiFormControl-fullWidth': {
            maxWidth: '300px',
        },
        '& label': {
            marginTop: formsSpacing,
            color: 'Grey',
        },
        '& label.Mui-focused': {
            color: 'DeepSkyBlue',
        },
        '& .MuiOutlinedInput-root': {
            '& input': {
                marginTop: formsSpacing,
                color: 'White',
            },
            '& fieldset': {
                marginTop: formsSpacing,
                borderColor: 'White',
            },
            '&:hover fieldset': {
                borderColor: 'DeepSkyBlue',
            },
            '& .Mui-focused fieldset': {
                borderColor: 'DeepSkyBlue',
            },
        },
    },
})(TextField);

const EmailField = withStyles({
    root: {
        maxWidth: '300px',
    },
})(InputField);

const SendButton = withStyles({
    root: {
        display: 'flex',
        marginTop: formsSpacing,
        marginBottom: formsSpacing,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})(Button);

class JelmerQA extends React.Component {
    constructor() {
        super();
        this.state = {
            question: '',
            email: '',
            emailError: false,
            emailErrorText: '',
            sendDisabled: true,
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onEmailInputChange = this.onEmailInputChange.bind(this);
        this.updateSendEnable = this.updateSendEnable.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {
        const lastValue = this.state[event.target.name];
        const newValue = event.target.value;

        this.setState({
            [event.target.name]: newValue,
        }, () => {
            if (lastValue === '' || newValue === '') {
                this.updateSendEnable();
            }
        });
    }

    onEmailInputChange(event) {
        this.onInputChange(event);

        const emailValue = event.target.value;

        const emailFormat = /^[^\s@]+@[^\s@]+\.[a-z][a-z]+$/;
        const formatMatch = emailValue === '' || !!emailValue.match(emailFormat);

        const lastErrorValue = this.state.emailError;
        const newErrorValue = !formatMatch;

        this.setState({
            emailError: newErrorValue,
            emailErrorText: formatMatch ? '' : 'Please enter a valid email address',
        }, () => {
            if (lastErrorValue !== newErrorValue) {
                this.updateSendEnable();
            }
        });
    }

    onSubmitForm(event) {
        event.preventDefault(); // Prevent page refresh

        // eslint-disable-next-line no-console
        console.log(this.state);

        fetch(apiRegisterUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: this.state.question,
                email: this.state.email,
            }),
        });
    }

    updateSendEnable() {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const disabled = this.state.question === '' || this.state.email === '' || this.state.emailError;

        this.setState({
            sendDisabled: disabled,
        });
    }

    render() {
        return (
            <div id='JelmerQA'>
                <h1>JelmerQA</h1>
                <Quote text={quoteText} author={quoteAuthor} />
                <p>
                    As I&apos;m very interested in understanding the complete chain from front to back,
                    I decided to create a registration project that utilizes various frameworks/tools on my list to learn.
                    My initial goal was to get some more Maven / Springboot / AWS experience, but the project is meant to evolve just like my learning list does.
                </p>
                <p>
                    The idea is simple: Anyone can use the below inputs to send me a question.
                    The question and your (automatically encrypted) mail address is saved in a database and you will get a confirmation email stating you sent a question my way.
                    I will also get an email stating someone sent me a question.
                    After I answer it, you will get a notification email after which your mail address data will be removed from the database.
                    The latter is of course implemented with the privacy laws in mind.
                </p>
                <p>
                    That&apos;s it in a nutshell. Of course this means that by entering your email below, you are agreeing to storing your mail address in my database up until I answer your question.
                    I will not use your email for any other purpose.
                </p>
                <p>
                    If you&apos;re interested the backend code repo can be found&nbsp;
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/JelmerQA-Backend'>here<OpenInNewIcon fontSize='small' /></a>.
                </p>
                <p style={{ color: 'crimson' }}><b>This form is still under construction and will not work just yet, unfortunately.</b></p>

                <form className='form' onSubmit={this.onSubmitForm}>
                    <InputField
                        name='question'
                        label='Question'
                        variant='outlined'
                        fullWidth
                        type='text'
                        required
                        value={this.state.question}
                        onChange={this.onInputChange}
                    />
                    <EmailField
                        name='email'
                        label='Email'
                        variant='outlined'
                        fullWidth
                        type='text'
                        required
                        value={this.state.email}
                        onChange={this.onEmailInputChange}
                        error={this.state.emailError}
                        helperText={this.state.emailErrorText}
                    />
                    <SendButton
                        variant='contained'
                        color='primary'
                        size='large'
                        endIcon={<SendIcon />}
                        type='submit'
                        disabled={this.state.sendDisabled}
                    >
                        Send
                    </SendButton>
                </form>
            </div>
        );
    }
}

export default JelmerQA;