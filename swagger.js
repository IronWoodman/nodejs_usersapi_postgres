/**
 * 
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         age:
 *           type: integer
 * paths:
 *   /users:
 *     get:
 *       description: Get all users  
 *       responses:
 *         '200':
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/User'
 *   
 *     post:
 *       description: Add new user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name: 
 *                   type: string
 *                 age: 
 *                   type: integer 
 *       responses:
 *         '200':
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/User'
 * 
 *     put:
 *       description: Update user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         '200':
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *               $ref: '#/components/schemas/User'
 * 
 *     delete:
 *       description: Delete user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *       responses:
 *         '200':
 *           description: Ok
 */