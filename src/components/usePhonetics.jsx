const usePhonetics = (phonetics) => {
  var out = {};

  const isNotBlank = (val) => {
    if (val == undefined || val == null) {
      return false;
    }

    val = val.toString().trim();
    if (val == "undefined" || val == "null" || val == "" || val == " ") {
      return false;
    }
    return true;
  };

  phonetics.map((each) => {
    if (isNotBlank(each.audio)) {
      out.audio = each.audio;
    }
    if (isNotBlank(each.text)) {
      out.text = each.text;
    }
  });

  return out;
};

export default usePhonetics;
