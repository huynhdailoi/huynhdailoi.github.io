function Input({
  labelSize,
  inputSize,
  inputRef,
  required,
  rows,
  label,
  err,
  errMessage,
  frmField,
  ...others
}) {
  const labelClass = `col-form-label col-sm-${
    labelSize ? labelSize : 2
  } col-lg-${labelSize} col-lg-2 col-md-3 ${required ? "required" : ""}`;
  const inputClass = `form-control ${err ? "is-invalid" : ""}`;
  const colInput = inputSize ? `col-md-${inputSize}` : "col";
  return (
    <>
      <div className="row mb-3">
        <label className={labelClass}>{label}</label>
        <div className={colInput}>
          {rows ? (
            <textarea
              className={inputClass}
              rows={rows}
              {...others}
              {...frmField}
            ></textarea>
          ) : (
            <input
              ref={inputRef}
              className={inputClass}
              {...frmField}
              {...others}
            />
          )}
          {err ? <div className="invalid-feedback">{errMessage}</div> : ""}
        </div>
      </div>
    </>
  );
}

export default Input;
