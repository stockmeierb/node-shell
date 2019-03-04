module.exports = function() {
  console.log("entered function")
  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt > ");
};
