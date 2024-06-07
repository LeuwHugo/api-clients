const supabase = require('../services/supabaseClient');

const getAllCustomers = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('customers')
      .select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const { data, error } = await supabase
      .from('customers')
      .insert([{ name, email }]);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const { data, error } = await supabase
      .from('customers')
      .update({ name, email })
      .eq('id', id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('customers')
      .delete()
      .eq('id', id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
