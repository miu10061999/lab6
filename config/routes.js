/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /person/view/:id': 'PersonController.view',//follow by an id (:id)
  'POST /person/delete/:id': 'PersonController.delete',
  'GET /person/update/:id': 'PersonController.update',
  'POST /person/update/:id': 'PersonController.update',
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout', 
  'GET /person/:id/worksFor': 'PersonController.populate',
  'GET /user/:id/supervises': 'UserController.populate',
  'POST /user/:id/supervises/add/:fk': 'UserController.add',
  'POST /user/:id/supervises/remove/:fk': 'UserController.remove',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
