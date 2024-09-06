const db = require('../models/customerModel');

// Create a new customer
exports.createCustomer = (req, res) => {
    const { firstName, lastName, phone, email, address } = req.body;

    db.run(
        `INSERT INTO customers (firstName, lastName, phone, email, address) VALUES (?, ?, ?, ?, ?)`,
        [firstName, lastName, phone, email, address],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: "Customer created successfully!", id: this.lastID });
            }
        }
    );
};

// Get customer by ID
exports.getCustomerById = (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM customers WHERE id = ?`, [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ message: "Customer not found" });
        } else {
            res.status(200).json(row);
        }
    });
};

// Update customer by ID
exports.updateCustomer = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, phone, email, address } = req.body;

    db.run(
        `UPDATE customers SET firstName = ?, lastName = ?, phone = ?, email = ?, address = ? WHERE id = ?`,
        [firstName, lastName, phone, email, address, id],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({ message: "Customer updated successfully" });
            }
        }
    );
};

// Delete customer
exports.deleteCustomer = (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM customers WHERE id = ?`, [id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Customer deleted successfully" });
        }
    });
};
