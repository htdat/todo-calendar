import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Alert = ({ alerts }) => {
  return (
    alerts.length > 0 && (
      <div className='alert-wrapper'>
        {alerts.map(({ id, text, alertType }) => {
          return (
            <div key={id} className={'single-alert alert-' + alertType}>
              {text}
            </div>
          );
        })}
      </div>
    )
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
