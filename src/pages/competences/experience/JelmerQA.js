import React from 'react';
import { Alert, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Quote from '../../../components/Quote';
import { getContentByLanguage } from '../../../utils/LanguageSetting';

const quoteText = 'The important thing is not to stop questioning. Curiosity has its own reason for existence.';
const quoteAuthor = 'Albert Einstein - Death of a Genius–Old Man’s Advice to Youth: ‘Never Lose a Holy Curiosity,’’ Life Magazine 38, no. 18, (May 2, 1955): p. 64';

const formsSpacing = '20px';
const apiRegisterUrl = 'https://jelmerqa-backend.herokuapp.com/register-question';

const inputStyle = {
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
};

const emailInputStyle = { maxWidth: '300px', marginBottom: formsSpacing, ...inputStyle };

class JelmerQA extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            emailError: false,
            emailErrorText: '',
            question: '',
            sendDisabled: true,
            sent: false,
            sendError: false,
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
            sent: false,
            sendError: false,
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
        })
            .then(() => {
                this.setState({
                    email: '',
                    question: '',
                    sent: true,
                });
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err);
                this.setState({
                    sendError: true,
                });
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
                    {getContentByLanguage(
                        'Aangezien ik erg geïnteresseerd ben de complete software chain van voren naar achteren te begrijpen, '
                        + 'besloot ik een registratie apllicatie te ontwikkelen die meerdere frameworks/tools op mijn "te leren" lijst gebruikt. '
                        + 'Mijn initiele doel was om meer Maven /Springboot ervaring op te doen, maar het project is bedoeld om door te groeien net zoals mijn "te leren" lijst doet.',

                        'As I\'m very interested in understanding the complete software chain from front to back, '
                        + 'I decided to create a registration application that utilizes various frameworks/tools on my list to learn. '
                        + 'My initial goal was to get some more Maven / Springboot experience, but the project is meant to evolve just like my learning list does.'
                    )}
                </p>
                <p>
                    {getContentByLanguage(
                        'Het idee is simpel:',

                        'The idea is simple:'
                    )}
                    <br />
                    {getContentByLanguage(
                        'Iedereen kan de onderstaande velden gebruiken om me een vraag te sturen. '
                        + 'De vraag en je (automatisch ge-encrypte) mail adres wordt opgeslagen in een database, en je zult een bevestigingsmail krijgen toegestuurd waarin staat dat je een vraag '
                        + 'naar mij hebt gestuurd. Ik zal ook een mail krijgen waarin staat dat iemand mij een vraag heeft gestuurd. '
                        + 'Nadat ik de vraag heb beantwoord krijgt de zender een notificatiemail waarna zijn mail adres wordt verwijderd uit de database. '
                        + 'Dit laatste is natuurlijk geïmplementeerd met de privacy wetten in gedachten.',

                        'Anyone can use the below inputs to send me a question. '
                        + 'The question and your (automatically encrypted) mail address is saved in a database and you will get a confirmation email stating you sent a question my way. '
                        + 'I will also get an email stating someone sent me a question. '
                        + 'After I answer it, you will get a notification email after which your mail address data will be removed from the database. '
                        + 'The latter is of course implemented with the privacy laws in mind.'
                    )}
                </p>
                <p>
                    {getContentByLanguage(
                        'Dat is het eigenlijk al. Natuurlijk betekent dit dat je door het invullen van je email adres akkoord gaat met het opslaan van dit adres in mijn database totdat '
                        + 'ik je vraag beantwoord heb. Ik zal je mail niet gebruiken voor enig ander doel tenzij je dat uitdrukkelijk aangeeft in je vraag.',
                        'That\'s it in a nutshell. Of course this means that by entering your email address below, you are agreeing to storing your mail address in my database '
                        + 'up until I answer your question. I will not use your email for any other purpose unless you explicitly state so in your question.'
                    )}
                </p>
                {
                    getContentByLanguage(
                        <p>
                            Als je interesse hebt in de Back-end code, dan kun je deze&nbsp;
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/JelmerQA-Backend'>hier<OpenInNewIcon fontSize='small' /></a> zien.
                        </p>,
                        <p>
                            If you&apos;re interested the Back-end code repo can be found&nbsp;
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/ChocolatePinecone/JelmerQA-Backend'>here<OpenInNewIcon fontSize='small' /></a>.
                        </p>
                    )
                }
                <Alert severity='warning'>
                    {getContentByLanguage(
                        'Deze applicatie is nog niet ver genoeg af en zal helaas nog niet werken.',
                        'This application is still under construction and will not work just yet, unfortunately.'
                    )}
                </Alert>

                <form className='form' onSubmit={this.onSubmitForm}>
                    <TextField
                        sx={inputStyle}
                        name='question'
                        label={getContentByLanguage('Vraag', 'Question')}
                        variant='outlined'
                        fullWidth
                        type='text'
                        required
                        value={this.state.question}
                        onChange={this.onInputChange}
                    />
                    <TextField
                        sx={emailInputStyle}
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
                    {
                        this.state.sent
                        && (
                            <p style={{ color: 'mediumseagreen' }}>
                                <b>{getContentByLanguage('Verstuurd!', 'Sent!')}</b>
                            </p>
                        )
                    }
                    {
                        this.state.sendError
                        && (
                            <Alert severity='error'>
                                {getContentByLanguage(
                                    'Er ging iets mis... Probeer het later nog eens!',
                                    'Something went wrong... Please try again later!'
                                )}
                            </Alert>
                        )
                    }
                    <Button
                        sx={{
                            display: 'flex',
                            marginTop: formsSpacing,
                            marginBottom: formsSpacing,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                        variant='contained'
                        color='primary'
                        size='large'
                        endIcon={<SendIcon />}
                        type='submit'
                        disabled={this.state.sendDisabled}
                    >
                        {getContentByLanguage('Verstuur', 'Send')}
                    </Button>
                </form>
            </div>
        );
    }
}

export default JelmerQA;