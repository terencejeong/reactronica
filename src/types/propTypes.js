import PropTypes from 'prop-types';

export const NoteType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	pitch: PropTypes.string,
	octave: PropTypes.number,
	accidental: PropTypes.string,
	midi: PropTypes.number,
});

export const StepType = PropTypes.shape({
	note: PropTypes.oneOfType([NoteType, PropTypes.string]),
	position: PropTypes.number,
	duration: PropTypes.number,
	velocity: PropTypes.number,
});