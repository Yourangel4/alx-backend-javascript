/**
 * Contains the miscellaneous route handlers.
 * @author moyinoluwa oluyeye <https://github.com/yourangel4>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
