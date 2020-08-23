import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../actions/alert';

export const Alert = ({ alerts, removeAlert }) => {
  return (
    alerts.length > 0 && (
      <div className='alert-wrapper'>
        {alerts.map(({ id, text, alertType }) => {
          return (
            <div key={id} className={'single-alert alert-' + alertType}>
              {text}
              <button onClick={() => removeAlert(id)}>x</button>
            </div>
          );
        })}
      </div>
    )
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const mapDispatchToProps = {
  removeAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
